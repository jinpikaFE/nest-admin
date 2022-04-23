import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

enum statusEnum {
  Y,
  N,
}

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString({ message: '菜单名必须是 String 类型' })
  @IsNotEmpty({ message: '菜单名不能为空' })
  @ApiProperty({ uniqueItems: true })
  @Column({ unique: true })
  name: string;

  @IsString({ message: '路由路径必须是 String 类型' })
  @IsNotEmpty({ message: '路由路径不能为空' })
  @ApiProperty({ uniqueItems: true })
  @Column({ unique: true })
  path: string;

  @IsString({ message: '图标必须是 String 类型' })
  @IsNotEmpty({ message: '图标不能为空' })
  @ApiProperty()
  @Column()
  icon: string;

  @IsEnum(statusEnum)
  @ApiProperty()
  @Column({ type: 'enum', nullable: true, enum: statusEnum })
  status: statusEnum;

  @IsEnum(statusEnum)
  @ApiProperty()
  @Column({ type: 'enum', nullable: true, enum: statusEnum })
  isLink: statusEnum;

  @IsString({ message: '标签颜色必须是 String 类型' })
  @IsNotEmpty({ message: '标签颜色不能为空' })
  @ApiProperty()
  @Column()
  color: string;

  @Column({ nullable: true })
  authority: string;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  lastMenu?: string;

  @CreateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'create_time',
    comment: '创建时间',
  })
  createTime: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'update_time',
    comment: '更新时间',
  })
  updateTime: Date;
}
