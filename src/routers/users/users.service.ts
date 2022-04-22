import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RuleResType } from 'src/types/global';
import { encryptPassword, makeSalt } from 'src/utils/cryptogram';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userModel: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<RuleResType<any>> {
    const { userName, password, email, phone, roleId, avatar } = createUserDto;
    const salt = makeSalt(); // 制作密码盐
    const hashPwd = encryptPassword(password, salt); // 加密密码

    await this.userModel.create({
      userName,
      password: hashPwd,
      salt,
      email,
      phone,
      roleId,
      avatar,
    });
    return { code: 0, message: '创建成功', data: null };
  }

  async findAll(params): Promise<RuleResType<any>> {
    const {
      current,
      pageSize,
      registerTime,
      userName,
      roleId,
      email,
      phone,
      startTime,
      endTime,
    } = params;
    const findObj: any = {};
    email && (findObj.email = eval(`/${email}/i`));
    phone && (findObj.phone = eval(`/${phone}/i`));
    userName && (findObj.userName = eval(`/${userName}/i`));
    roleId && (findObj.roleId = { $in: roleId });
    startTime &&
      endTime &&
      (findObj.registerTime = {
        $gte: new Date(startTime),
        $lte: new Date(endTime),
      });
    const data = await this.userModel
      .find(findObj, { password: 0, salt: 0 })
      .populate('roleId', ['name'])
      .skip((Number(current) - 1) * Number(pageSize))
      .limit(Number(pageSize))
      .sort({ registerTime: registerTime === 'descend' ? -1 : 1 });
    const total = await this.userModel
      .find(findObj)
      .populate('roleId', ['name'])
      .count();
    return { code: 0, message: '查询成功', data, total };
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<RuleResType<any>> {
    const { userName, email, phone, roleId, avatar } = updateUserDto;
    const data = await this.userModel.findOneAndUpdate(
      { _id: id },
      {
        userName,
        email,
        phone,
        roleId,
        avatar,
      },
    );
    if (data) {
      return { code: 0, message: '更新成功', data };
    }
    return { code: -1, message: '更新失败', data };
  }

  async remove(id: string): Promise<RuleResType<any>> {
    const data = await this.userModel.delete(id);
    return { code: 0, message: '删除成功', data };
  }
}
