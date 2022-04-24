import { OmitType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { User } from '../entities/user.entity';
export class CreateUserDto extends User {
  @IsString({ message: '验证码必须是 String 类型' })
  @IsNotEmpty({ message: '验证码不能为空' })
  @ApiProperty()
  readonly captcha: string;
}
