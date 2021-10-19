import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {
  @IsString({ message: '用户名必须是 String 类型' })
  @IsNotEmpty({ message: '用户名不能为空' })
  @ApiProperty({ uniqueItems: true })
  readonly userName: string;

  @IsString({ message: '邮箱必须是 String 类型' })
  @IsNotEmpty({ message: '邮箱不能为空' })
  @ApiProperty({ uniqueItems: true })
  readonly email: string;

  @IsString({ message: '手机号必须是 String 类型' })
  @IsNotEmpty({ message: '手机号不能为空' })
  @ApiProperty({ uniqueItems: true })
  readonly phone: string;

  @IsString({ message: '密码必须是 String 类型' })
  @IsNotEmpty({ message: '密码不能为空' })
  @ApiProperty()
  readonly password: string;

  @IsString({ message: '角色必须是 String 类型' })
  @IsNotEmpty({ message: '角色不能为空' })
  @ApiProperty()
  readonly role: string;

  @IsString({ message: '验证码必须是 String 类型' })
  @IsNotEmpty({ message: '验证码不能为空' })
  @ApiProperty()
  readonly captcha: string;

  @ApiProperty()
  readonly avatar?: string;
}
