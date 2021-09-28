import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RuleResType } from 'src/types/global';

@Injectable()
export class LoginService {
  async login(loginDto: LoginDto): Promise<RuleResType<any>> {
    const { userName, password } = loginDto;
    if (userName === 'admin' && password === 'admin') {
      return {
        code: 0,
        message: '管理员登录成功',
        data: {
          role: 'admin',
        },
      };
    }
    return {
      code: -1,
      message: '密码错误',
      data: null,
    };
  }
}
