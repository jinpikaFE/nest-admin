import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

export type RoleDocument = Role & Document;

@Schema()
export class Role extends Document {
  @IsString({ message: '角色名必须是 String 类型' })
  @IsNotEmpty({ message: '角色不能为空' })
  @ApiProperty({ uniqueItems: true })
  @Prop({ required: true, unique: true })
  name: string;

  @IsNotEmpty({ message: '权限不能为空' })
  @ApiProperty()
  @Prop([String])
  authority: string[];

  @Prop({ default: Date.now })
  registerTime: Date;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
