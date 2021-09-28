import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class LoginService {
  login(loginDto: LoginDto) {
    const { userName, password } = loginDto;
    if (userName === 'admin' && password === 'admin') {
      return {
        code: 0,
        message: '登录成功',
      };
    }
    return {
      code: -1,
      message: '密码错误',
    };
  }
}
