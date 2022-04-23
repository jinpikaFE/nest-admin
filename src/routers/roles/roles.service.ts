import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RuleResType } from 'src/types/global';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleModel: Repository<Role>,
    @InjectRepository(User)
    private readonly userModel: Repository<User>,
  ) {}

  async create(createRoleDto: CreateRoleDto): Promise<RuleResType<any>> {
    const { name, authority } = createRoleDto;
    const data = await this.roleModel.save({
      name,
      authority,
    });
    if (data) {
      return { code: 0, message: '创建成功', data };
    }
    return { code: -1, message: '创建失败', data };
  }

  async filterQuery(params): Promise<RuleResType<any>> {
    const {
      current,
      pageSize,
      registerTime,
      name,
      authority,
      startTime,
      endTime,
    } = params;
    let data = this.roleModel.createQueryBuilder().where({});
    if (name) {
      data = data.andWhere({ name });
    }
    if (authority) {
      data = data.andWhere({ authority });
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

  async findAll(): Promise<RuleResType<any>> {
    const data = await this.roleModel.find();
    return { code: 0, message: '查询成功', data };
  }

  async update(
    id: string,
    updateRoleDto: UpdateRoleDto,
  ): Promise<RuleResType<any>> {
    const data = await this.roleModel.update(id, updateRoleDto);
    if (data) {
      return { code: 0, message: '更新成功', data };
    }
    return { code: -1, message: '更新失败', data };
  }

  async remove(id: string, name: string): Promise<RuleResType<any>> {
    const resUser = await this.userModel
      .createQueryBuilder()
      .where({ role: name })
      .getMany();
    if (resUser.length > 0) {
      return { code: -1, message: '删除失败,该角色下存在用户', data: null };
    } else {
      const data = await this.roleModel.delete(id);
      return { code: 0, message: '删除成功', data };
    }
  }
}
