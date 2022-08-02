import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RuleResType } from 'src/types/global';
import { getConnection, Repository } from 'typeorm';
import { Compon } from '../compon/entities/compon.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleModel: Repository<Role>,
    @InjectRepository(Compon)
    private readonly componModel: Repository<Compon>,
  ) {}

  async create(createRoleDto: CreateRoleDto): Promise<RuleResType<any>> {
    const { name, compon, desc, half_compon } = createRoleDto;
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const componList = [];
      for (let i = 0; i < compon.length; i++) {
        const componObj = await this.componModel
          .createQueryBuilder()
          .where({ id: compon[i] })
          .getOne();
        if (!componObj) throw new BadRequestException('组件id不存在');
        componList.push(componObj);
      }
      const halfComponList = [];
      for (let i = 0; i < half_compon.length; i++) {
        const componObj = await this.componModel
          .createQueryBuilder()
          .where({ id: half_compon[i] })
          .getOne();
        if (!componObj) throw new BadRequestException('组件id不存在');
        halfComponList.push(componObj);
      }
      const data = await this.roleModel.save({
        desc,
        name,
        compon: componList,
        half_compon: halfComponList,
      });
      await await queryRunner.commitTransaction();
      return { code: 200, message: '创建成功', data };
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException(e);
    }
  }

  async filterQuery(params): Promise<RuleResType<any>> {
    const {
      current = 1,
      pageSize = 10,
      registerTime,
      name,
      authority,
      startTime,
      endTime,
    } = params;
    let data = this.roleModel
      .createQueryBuilder()
      /** 第一个是关系， 第二个是表别名 */
      .leftJoinAndSelect('Role.compon', 'compon')
      .leftJoinAndSelect('Role.half_compon', 'half_compon')
      .where({});
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
      code: 200,
      message: '查询成功',
      data: await data.getMany(),
      total: await data.getCount(),
    };
  }

  async findAll(): Promise<RuleResType<any>> {
    const data = await this.roleModel
      .createQueryBuilder()
      /** 第一个是关系， 第二个是表别名 */
      .leftJoinAndSelect('Role.compon', 'compon')
      .leftJoinAndSelect('Role.half_compon', 'half_compon')
      .getMany();
    return { code: 200, message: '查询成功', data };
  }

  async update(
    id: string,
    updateRoleDto: UpdateRoleDto,
  ): Promise<RuleResType<any>> {
    const { name, compon, desc, half_compon } = updateRoleDto;
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const componList = [];
      if (compon) {
        for (let i = 0; i < compon.length; i++) {
          const componObj = await this.componModel
            .createQueryBuilder()
            .where({ id: compon[i] })
            .getOne();
          if (!componObj) throw new BadRequestException('组件id不存在');
          componList.push(componObj);
        }
      }
      const halfComponList = [];
      if (half_compon) {
        for (let i = 0; i < half_compon.length; i++) {
          const componObj = await this.componModel
            .createQueryBuilder()
            .where({ id: half_compon[i] })
            .getOne();
          if (!componObj) throw new BadRequestException('组件id不存在');
          halfComponList.push(componObj);
        }
      }
      const roleEntity = new Role();
      roleEntity.id = +id;
      roleEntity.name = name;
      roleEntity.desc = desc;
      if (compon) {
        roleEntity.compon = componList;
      }
      if (half_compon) {
        roleEntity.half_compon = halfComponList;
      }
      const data = await this.roleModel.save(roleEntity);
      await await queryRunner.commitTransaction();
      return { code: 200, message: '更新成功', data };
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException(e);
    }
  }

  async remove(id: string): Promise<RuleResType<any>> {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const data = await this.roleModel.delete(id);
      await await queryRunner.commitTransaction();
      return { code: 200, message: '删除成功', data };
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException(e);
    }
  }
}
