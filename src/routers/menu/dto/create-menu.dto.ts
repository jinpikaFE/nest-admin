import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateMenuDto {
  @IsString({ message: '菜单名必须是 String 类型' })
  @IsNotEmpty({ message: '菜单名不能为空' })
  @ApiProperty({ uniqueItems: true })
  readonly name: string;

  @IsString({ message: '路由路径必须是 String 类型' })
  @IsNotEmpty({ message: '路由路径不能为空' })
  @ApiProperty({ uniqueItems: true })
  readonly path: string;

  @ApiProperty({ required: false })
  readonly lastMenu?: string;

  @IsString({ message: '图标必须是 String 类型' })
  @IsNotEmpty({ message: '图标不能为空' })
  @ApiProperty()
  readonly icon: string;

  @IsEnum([0, 1])
  @ApiProperty()
  readonly status: 0 | 1;

  @IsEnum([0, 1])
  @ApiProperty()
  readonly isLink: 0 | 1;
}
