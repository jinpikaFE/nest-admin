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
    const { userName, password, email, phone, role, avatar } = createUserDto;
    const salt = makeSalt(); // 制作密码盐
    const hashPwd = encryptPassword(password, salt); // 加密密码

    await this.userModel.save({
      userName,
      password: hashPwd,
      salt,
      email,
      phone,
      role,
      avatar,
    });
    return { code: 0, message: '创建成功', data: null };
  }

  async findAll(params): Promise<RuleResType<any>> {
    const {
      current = 1,
      pageSize = 10,
      userName,
      role,
      email,
      phone,
      startTime,
      endTime,
    } = params;
    let data = this.userModel
      .createQueryBuilder()
      .leftJoinAndSelect('User.role', 'Role.user')
      .where({});
    if (userName) {
      data = data.andWhere({ userName });
    }
    if (email) {
      data = data.andWhere({ email });
    }
    if (phone) {
      data = data.andWhere({ phone });
    }
    if (email) {
      data = data.andWhere({ email });
    }
    if (role) {
      data = data.andWhere({ role });
    }
    if (startTime && endTime) {
      data = data.andWhere('createTime BETWEEN :start AND :end', {
        start: startTime,
        end: endTime,
      });
    }
    data = data
      .skip((Number(current) - 1) * Number(pageSize))
      .take(Number(pageSize));
    return {
      code: 0,
      message: '查询成功',
      data: await data.getMany(),
      total: await data.getCount(),
    };
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<RuleResType<any>> {
    const { userName, email, phone, role, avatar } = updateUserDto;
    const data = await this.userModel.update(id, {
      userName,
      email,
      phone,
      role,
      avatar,
    });
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
