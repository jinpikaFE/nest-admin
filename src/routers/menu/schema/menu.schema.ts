import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

export type MenuDocument = Menu & Document;

enum statusEnum {
  Y,
  N,
}

@Schema()
export class Menu extends Document {
  @IsString({ message: '菜单名必须是 String 类型' })
  @IsNotEmpty({ message: '菜单名不能为空' })
  @ApiProperty({ uniqueItems: true })
  @Prop({ required: true, unique: true })
  name: string;

  @IsString({ message: '路由路径必须是 String 类型' })
  @IsNotEmpty({ message: '路由路径不能为空' })
  @ApiProperty({ uniqueItems: true })
  @Prop({ required: true, unique: true })
  path: string;

  @IsString({ message: '图标必须是 String 类型' })
  @IsNotEmpty({ message: '图标不能为空' })
  @ApiProperty()
  @Prop({ required: true })
  icon: string;

  @IsEnum(statusEnum)
  @ApiProperty()
  @Prop({ enum: [0, 1] })
  status: statusEnum;

  @IsEnum(statusEnum)
  @ApiProperty()
  @Prop({ enum: [0, 1] })
  isLink: statusEnum;

  @IsString({ message: '标签颜色必须是 String 类型' })
  @IsNotEmpty({ message: '标签颜色不能为空' })
  @ApiProperty()
  @Prop({ required: true })
  color: string;

  @Prop({ type: [String] })
  authority: string[];

  @ApiProperty({ required: false })
  @Prop()
  lastMenu?: string;

  @Prop({ default: Date.now })
  registerTime: Date;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
