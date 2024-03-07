import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RuleResType } from 'src/types/global';
import { AuthService } from 'src/logical/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';

@Injectable()
export class LoginService {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private readonly userModel: Repository<User>,
    @InjectRedis()
    private readonly redis: Redis,
  ) {}
  async login(loginDto: LoginDto): Promise<RuleResType<any>> {
    const { username, password, loginType } = loginDto;
    if (loginType === 'account') {
      const authResult = await this.authService.validateUser(
        username,
        password,
      );
      switch (authResult.code) {
        case 0:
          const res = await this.authService.certificate(authResult?.user);
          return {
            code: 200,
            message: '登录成功',
            data: {
              userId: authResult?.user?.id,
              token: res?.data?.token,
            },
          };
        case -2:
          return {
            code: -1,
            message: '账号或密码不正确',
            data: null,
          };
        default:
          return {
            code: -1,
            message: '账号不存在',
            data: null,
          };
      }
    }
    if (loginType === 'phone') {
      const cache = await this.redis.get(username);

      if (password !== cache) {
        return { code: -1, message: '短信验证码错误', data: null };
      }
      const user = await this.userModel
        .createQueryBuilder()
        .where({ phone: username })
        .getOne();
      let res = null;
      /** 存在直接取，不存在则存储 */
      if (user) {
        res = user;
      } else {
        res = await this.userModel.save({
          phone: username,
        });
      }

      const payload = {
        username: username,
        id: res?.id,
      };
      const token = this.jwtService.sign(payload);
      try {
        await this.redis.setex(
          `${payload.id}-${payload.username}`,
          24 * 60 * 60,
          `${token}`,
        );
      } catch {
        throw new UnauthorizedException('token存储redis失败');
      }
      return {
        code: 200,
        message: '登录成功',
        data: {
          token: token,
          userId: res?.id,
        },
      };
    }
  }
}
