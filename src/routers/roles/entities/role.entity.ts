import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString({ message: '角色名必须是 String 类型' })
  @IsNotEmpty({ message: '角色不能为空' })
  @ApiProperty({ uniqueItems: true })
  @Column({ unique: true })
  name: string;

  @IsNotEmpty({ message: '权限不能为空' })
  @ApiProperty()
  @Column()
  authority: string;

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
