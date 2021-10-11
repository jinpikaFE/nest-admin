import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateMenuDto {
  @IsString({ message: '角色名必须是 String 类型' })
  @IsNotEmpty({ message: '角色名不能为空' })
  @ApiProperty({ uniqueItems: true })
  readonly name: string;

  @IsNotEmpty({ message: '权限不能为空' })
  @ApiProperty()
  readonly authority: string[];
}
