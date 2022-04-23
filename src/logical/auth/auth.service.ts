// src/logical/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { UsersService } from '../../routers/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { encryptPassword } from '../../utils/cryptogram';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/routers/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userModel: Repository<User>,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // JWT验证 - Step 2: 校验用户信息
  async validateUser(userName: string, password: string): Promise<any> {
    if (userName === 'admin') {
      if (password === 'admin') {
        return {
          code: 0,
          message: '管理员登录成功',
          user: { userName },
        };
      }
      return {
        code: -2,
        user: null,
        message: '密码错误',
      };
    } else {
      const user = await this.userModel
        .createQueryBuilder()
        .where({ userName })
        .getOne();
      if (user) {
        const hashedPassword = user.password;
        const salt = user.salt;
        // 通过密码盐，加密传参，再与数据库里的比较，判断是否相等
        const hashPassword = encryptPassword(password, salt);
        if (hashedPassword === hashPassword) {
          // 密码正确
          return {
            code: 0,
            user,
            message: '密码正确',
          };
        } else {
          // 密码错误
          return {
            code: -2,
            user: null,
            message: '密码错误',
          };
        }
      }
      // 查无此人
      return {
        code: -1,
        user: null,
        message: '查无此人',
      };
    }
  }

  // JWT验证 - Step 3: 处理 jwt 签证
  async certificate(user: any) {
    const payload = {
      userName: user.userName,
      _id: user.userName === 'admin' ? 0 : user?._id,
    };
    try {
      const token = this.jwtService.sign(payload);
      return {
        code: 0,
        data: {
          token,
        },
        message: `登录成功`,
      };
    } catch (error) {
      return {
        code: -1,
        message: `账号或密码错误`,
      };
    }
  }
}
