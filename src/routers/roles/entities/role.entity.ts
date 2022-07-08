import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/routers/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
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

  @IsString({ message: '角色描述必须是 String 类型' })
  @IsNotEmpty({ message: '角色描述不能为空' })
  @ApiProperty()
  @Column()
  desc: string;

  @IsNotEmpty({ message: '权限不能为空' })
  @ApiProperty()
  @Column({ type: 'simple-array' })
  authority: string[];

  @Column({ default: false })
  is_super: boolean;

  @ApiProperty()
  @OneToMany(() => User, (user) => user.role) // 将另一面指定为第二个参数
  user: User[];

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
