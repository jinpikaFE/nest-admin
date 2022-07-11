import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RedisInstance } from 'src/providers/database/redis';
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
    const { username, password, email, phone, role, avatar, captcha } =
      createUserDto;
    const salt = makeSalt(); // 制作密码盐
    const hashPwd = encryptPassword(password, salt); // 加密密码
    const redis = await RedisInstance.initRedis('captcha', 0);
    const cache = await redis.get(createUserDto?.phone);

    if (captcha !== cache) {
      return { code: -1, message: '短信验证码错误', data: null };
    }

    await this.userModel.save({
      username,
      password: hashPwd,
      salt,
      email,
      phone,
      role,
      avatar,
    });
    return { code: 200, message: '创建成功', data: null };
  }

  async findOne(id: string): Promise<RuleResType<any>> {
    const data = await this.userModel
      .createQueryBuilder()
      .leftJoinAndSelect('User.role', 'role')
      .select([
        'User.id',
        'User.username',
        'User.email',
        'User.phone',
        'User.avatar',
        'User.createTime',
        'User.updateTime',
        'role.id',
        'role.name',
        'role.authority',
        'role.is_super',
      ])
      .where({ id })
      .getOne();

    return {
      code: 200,
      message: '查询成功',
      data,
    };
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
      /** 第一个是关系， 第二个是表别名 */
      .leftJoinAndSelect('User.role', 'role')
      .select([
        'User.id',
        'User.username',
        'User.email',
        'User.phone',
        'User.avatar',
        'User.createTime',
        'User.updateTime',
        'role.id',
        'role.name',
        'role.authority',
        'role.is_super',
      ])
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
      code: 200,
      message: '查询成功',
      data: await data.getMany(),
      total: await data.getCount(),
    };
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<RuleResType<any>> {
    const { username, email, phone, role, avatar, captcha } = updateUserDto;
    const redis = await RedisInstance.initRedis('captcha', 0);
    const cache = await redis.get(updateUserDto?.phone);

    if (captcha !== cache) {
      return { code: -1, message: '短信验证码错误', data: null };
    }

    const data = await this.userModel.update(id, {
      username,
      email,
      phone,
      role,
      avatar,
    });
    if (data) {
      return { code: 200, message: '更新成功', data };
    }
    return { code: -1, message: '更新失败', data };
  }

  async remove(id: string): Promise<RuleResType<any>> {
    const data = await this.userModel.delete(id);
    return { code: 200, message: '删除成功', data };
  }
}
