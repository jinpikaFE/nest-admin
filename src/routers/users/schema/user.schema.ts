import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export type UserDocument = User & Document;

@Schema()
export class User extends Document {
  @IsString({ message: '用户名必须是 String 类型' })
  @IsNotEmpty({ message: '用户名不能为空' })
  @ApiProperty({ uniqueItems: true })
  @Prop({ required: true, unique: true })
  userName: string;

  @IsString({ message: '邮箱必须是 String 类型' })
  @IsNotEmpty({ message: '邮箱不能为空' })
  @ApiProperty({ uniqueItems: true })
  @Prop({ required: true, unique: true })
  email: string;

  @IsString({ message: '手机号必须是 String 类型' })
  @IsNotEmpty({ message: '手机号不能为空' })
  @ApiProperty({ uniqueItems: true })
  @Prop({ required: true, unique: true })
  phone: string;

  @IsString({ message: '角色id必须是 String 类型' })
  @IsNotEmpty({ message: '角色id不能为空' })
  @ApiProperty()
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    default: null,
  })
  roleId: any;

  @IsString({ message: '头像必须是 String 类型' })
  @IsNotEmpty({ message: '头像不能为空' })
  @ApiProperty()
  @Prop()
  avatar: string;

  @IsString({ message: '密码必须是 String 类型' })
  @IsNotEmpty({ message: '密码不能为空' })
  @ApiProperty()
  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  salt: string;

  @Prop({ default: Date.now })
  registerTime: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
