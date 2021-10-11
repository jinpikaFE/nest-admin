import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { RuleResType } from 'src/types/global';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { IRole } from './interface/role';

@Injectable()
export class RolesService {
  constructor(
    @Inject('RoleModelToken')
    private readonly roleModel: Model<IRole>,
  ) {}

  async create(createRoleDto: CreateRoleDto): Promise<RuleResType<any>> {
    const { name, authority } = createRoleDto;
    const data = await this.roleModel.create({
      name,
      authority,
    });
    if (data) {
      return { code: 0, message: '创建成功', data };
    }
    return { code: -1, message: '创建失败', data };
  }

  async findAll(): Promise<RuleResType<any>> {
    const data = await this.roleModel.find();
    return { code: 0, message: '查询成功', data };
  }

  async findOne(id: string): Promise<RuleResType<any>> {
    const data = await this.roleModel.findById(id);
    return { code: 0, message: '查询成功', data };
  }

  async update(
    id: string,
    updateRoleDto: UpdateRoleDto,
  ): Promise<RuleResType<any>> {
    const data = await this.roleModel.findOneAndUpdate(
      { _id: id },
      updateRoleDto,
    );
    if (data) {
      return { code: 0, message: '更新成功', data };
    }
    return { code: -1, message: '更新失败', data };
  }

  async remove(id: string): Promise<RuleResType<any>> {
    const data = await this.roleModel.remove({ _id: id });
    if (data?.deletedCount >= 1) {
      return { code: 0, message: '删除成功', data };
    }
    return { code: -1, message: '删除失败', data };
  }
}
