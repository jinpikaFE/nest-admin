import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RuleResType } from 'src/types/global';
import { encryptPassword, makeSalt } from 'src/utils/cryptogram';
import { getConnection, Repository } from 'typeorm';
import { Role } from '../roles/entities/role.entity';
import { CreateUserDto } from './dto/create-user.dto';

import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import { InjectRedis } from '@nestjs-modules/ioredis';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private readonly userModel: Repository<User>,
    @InjectRepository(Role)
    private readonly roleModel: Repository<Role>,
    private configService: ConfigService,
    @InjectRedis()
    private readonly redis: Redis,
  ) {}

  async onModuleInit() {
    await this.createAdminUser();
  }

  /** 初始创建管理员用户 */
  private async createAdminUser() {
    const username = this.configService.get<string>('initAdmin.username');
    const password = this.configService.get<string>('initAdmin.password');
    // 在这里编写创建 admin 用户的逻辑
    const user = await this.userModel
      .createQueryBuilder()
      .where({ username })
      .getOne();

    /** 用户是否存在 */
    if (!user) {
      const salt = makeSalt(); // 制作密码盐
      const hashPwd = encryptPassword(password, salt); // 加密密码
      await this.userModel.save({
        username,
        password: hashPwd,
        salt,
      });
    }
  }

  async create(createUserDto: CreateUserDto): Promise<RuleResType<any>> {
    const { username, password, email, phone, role, avatar, captcha } =
      createUserDto;
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const salt = makeSalt(); // 制作密码盐
      const hashPwd = encryptPassword(password, salt); // 加密密码
      const cache = await this.redis.get(createUserDto?.phone);
      if (captcha !== cache) {
        return { code: -1, message: '短信验证码错误', data: null };
      }

      const roleList = [];
      for (let i = 0; i < role.length; i++) {
        const roleObj = await this.roleModel
          .createQueryBuilder()
          .where({ id: role[i] })
          .getOne();
        if (!roleObj) throw new BadRequestException(`${role[i]} 角色id不存在`);
        roleList.push(roleObj);
      }

      await this.userModel.save({
        username,
        password: hashPwd,
        salt,
        email,
        phone,
        role: roleList,
        avatar,
      });
      await queryRunner.commitTransaction();
      return { code: 200, message: '创建成功', data: null };
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException(e);
    }
  }

  async findOne(id: string): Promise<RuleResType<any>> {
    const data = await this.userModel
      .createQueryBuilder()
      .leftJoinAndSelect('User.role', 'role')
      .leftJoinAndSelect('role.compon', 'compon')
      .select([
        'User.id',
        'User.username',
        'User.email',
        'User.phone',
        'User.avatar',
        'User.createTime',
        'User.updateTime',
        'role',
        'compon.name',
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
      .leftJoinAndSelect('role.compon', 'compon')
      .select([
        'User.id',
        'User.username',
        'User.email',
        'User.phone',
        'User.avatar',
        'User.createTime',
        'User.updateTime',
        'role',
        'compon.name',
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
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const cache = await this.redis.get(updateUserDto?.phone);

      if (captcha !== cache) {
        return { code: -1, message: '短信验证码错误', data: null };
      }

      const roleList = [];
      if (role) {
        for (let i = 0; i < role.length; i++) {
          const roleObj = await this.roleModel
            .createQueryBuilder()
            .where({ id: role[i] })
            .getOne();
          if (!roleObj)
            throw new BadRequestException(`${role[i]} 角色id不存在`);
          roleList.push(roleObj);
        }
      }

      const userEntity = new User();
      userEntity.id = +id;
      userEntity.username = username;
      userEntity.email = email;
      userEntity.phone = phone;
      userEntity.avatar = avatar;
      if (role) {
        userEntity.role = roleList;
      }
      const data = await this.userModel.save(userEntity);
      if (data) {
        await queryRunner.commitTransaction();
        return { code: 200, message: '更新成功', data };
      }
      await queryRunner.rollbackTransaction();
      return { code: -1, message: '更新失败', data: null };
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException(e);
    }
  }

  async remove(id: string): Promise<RuleResType<any>> {
    const data = await this.userModel.delete(id);
    return { code: 200, message: '删除成功', data };
  }
}
