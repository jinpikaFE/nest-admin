import { OmitType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { User } from '../schema/user.schema';
export class CreateUserDto extends OmitType(User, [
  'salt',
  'registerTime',
] as const) {
  @IsString({ message: '验证码必须是 String 类型' })
  @IsNotEmpty({ message: '验证码不能为空' })
  @ApiProperty()
  readonly captcha: string;
}
