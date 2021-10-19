import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { RuleResType } from 'src/types/global';
import { encryptPassword, makeSalt } from 'src/utils/cryptogram';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './interface/user';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UserModelToken')
    private readonly userModel: Model<IUser>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<RuleResType<any>> {
    const { userName, password, email, phone, role, avatar } = createUserDto;
    const salt = makeSalt(); // 制作密码盐
    const hashPwd = encryptPassword(password, salt); // 加密密码
    const data = await this.userModel.create({
      userName,
      password: hashPwd,
      salt,
      email,
      phone,
      role,
      avatar,
    });
    return { code: 0, message: '创建成功', data };
  }

  async findAll(): Promise<RuleResType<any>> {
    const data = await this.userModel.find();
    return { code: 0, message: '查询成功', data };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<RuleResType<any>> {
    const data = await this.userModel.findOneAndUpdate(
      { _id: id },
      updateUserDto,
    );
    if (data) {
      return { code: 0, message: '更新成功', data };
    }
    return { code: -1, message: '更新失败', data };
  }

  async remove(id: string): Promise<RuleResType<any>> {
    const data = await this.userModel.remove({ _id: id });
    if (data?.deletedCount >= 1) {
      return { code: 0, message: '删除成功', data };
    }
    return { code: -1, message: '删除失败', data };
  }
}
