import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RuleResType } from 'src/types/global';
import { AuthService } from 'src/logical/auth/auth.service';

@Injectable()
export class LoginService {
  constructor(private readonly authService: AuthService) {}
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
      return {
        code: 200,
        message: '管理员登录成功',
        data: {
          token: '手机号登录',
          role: 'admin',
        },
      };
    }
  }
}
