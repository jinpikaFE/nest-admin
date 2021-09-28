import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { RuleResType } from 'src/types/global';
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
    const createdCat = new this.userModel(createUserDto);
    const data = await createdCat.save();
    return { code: 0, message: '创建成功', data };
  }

  async findAll(): Promise<RuleResType<any>> {
    const data = await this.userModel.find();
    return { code: 0, message: '创建成功', data };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
