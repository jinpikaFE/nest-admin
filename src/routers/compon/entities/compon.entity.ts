import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Role } from 'src/routers/roles/entities/role.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';

@Entity()
export class Compon {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString({ message: '组件名必须是 String 类型' })
  @IsNotEmpty({ message: '组件名不能为空' })
  @ApiProperty({ uniqueItems: true })
  @Column({ unique: true })
  name: string;

  @IsString({ message: '类型必须是 String 类型' })
  @IsNotEmpty({ message: '类型不能为空' })
  @ApiProperty()
  @Column()
  type: string;

  @ApiProperty()
  @Column({ default: null })
  parentId?: string;

  @ManyToOne(() => Compon, (compon) => compon.parent) // 将另一面指定为第二个参数
  parent: Compon;

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
