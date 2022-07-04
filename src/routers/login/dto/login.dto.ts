import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { loginType } from '../types/enum';

export class LoginDto {
  @IsString({ message: '用户名必须是 String 类型' })
  @IsNotEmpty({ message: '用户名不能为空' })
  @ApiProperty({ uniqueItems: true })
  username: string;

  @IsNotEmpty({ message: '密码不能为空' })
  @ApiProperty()
  password: string;

  @IsNotEmpty({ message: '登录类型不能为空' })
  @IsEnum(loginType, { message: '登录类型只能为phone 和 account' })
  @ApiProperty({ enum: ['phone', 'account'] })
  loginType: loginType;
}
