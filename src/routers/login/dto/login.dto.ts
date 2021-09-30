import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString({ message: '用户名必须是 String 类型' })
  @IsNotEmpty({ message: '用户名不能为空' })
  @ApiProperty({ uniqueItems: true })
  userName: string;

  @IsNotEmpty({ message: '密码不能为空' })
  @ApiProperty()
  password: string;

  @IsNotEmpty({ message: '登录类型不能为空' })
  @ApiProperty()
  loginType: 'phone' | 'account';
}
