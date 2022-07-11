import { OmitType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSmsDto {
  @IsString({ message: '手机号必须是 String 类型' })
  @IsNotEmpty({ message: '手机号不能为空' })
  @ApiProperty()
  phone: string;
}
