import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString({ message: '用户名必须是 String 类型' })
  @IsNotEmpty({ message: '用户名不能为空' })
  @ApiProperty({ uniqueItems: true })
  @Column({ nullable: true, unique: true })
  userName: string;

  @IsString({ message: '邮箱必须是 String 类型' })
  @IsNotEmpty({ message: '邮箱不能为空' })
  @ApiProperty({ uniqueItems: true })
  @Column({ nullable: true, unique: true })
  email: string;

  @IsString({ message: '手机号必须是 String 类型' })
  @IsNotEmpty({ message: '手机号不能为空' })
  @ApiProperty({ uniqueItems: true })
  @Column({ nullable: true, unique: true })
  phone: string;

  @IsString({ message: '角色id必须是 String 类型' })
  @IsNotEmpty({ message: '角色id不能为空' })
  @ApiProperty()
  @Column({
    nullable: true,
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Role',
    //   default: null,
  })
  roleId: any;

  @IsString({ message: '头像必须是 String 类型' })
  @IsNotEmpty({ message: '头像不能为空' })
  @ApiProperty()
  @Column()
  avatar: string;

  @IsString({ message: '密码必须是 String 类型' })
  @IsNotEmpty({ message: '密码不能为空' })
  @ApiProperty()
  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  salt: string;

  @Column({ default: Date.now })
  registerTime: Date;
}
