import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RuleResType } from 'src/types/global';
import { Repository, getConnection } from 'typeorm';
import { Role } from '../roles/entities/role.entity';
import { CreateComponDto } from './dto/create-compon.dto';
import { UpdateComponDto } from './dto/update-compon.dto';
import { Compon } from './entities/compon.entity';

@Injectable()
export class ComponService {
  constructor(
    @InjectRepository(Compon)
    private readonly componModel: Repository<Compon>,
    @InjectRepository(Role)
    private readonly roleModel: Repository<Role>,
  ) {}

  async create(createComponDto: CreateComponDto): Promise<RuleResType<any>> {
    const data = await this.componModel.save(createComponDto);
    if (data) {
      return { code: 200, message: '创建成功', data };
    }
    return { code: -1, message: '创建失败', data };
  }

  async findAll(): Promise<RuleResType<any>> {
    const data = await this.componModel.find({
      relations: ['parent'],
      join: {
        alias: 'compon',
        leftJoinAndSelect: {
          parent: 'compon.parent',
        },
      },
    });
    return { code: 200, message: '查询成功', data };
  }

  async update(
    id: string,
    updateComponDto: UpdateComponDto,
  ): Promise<RuleResType<any>> {
    const data = await this.componModel.update(id, updateComponDto);
    if (data) {
      return { code: 200, message: '更新成功', data };
    }
    return { code: -1, message: '更新失败', data };
  }

  async remove(
    id: string,
    updateComponDto: UpdateComponDto,
  ): Promise<RuleResType<any>> {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const resCompon = await this.componModel
        .createQueryBuilder()
        .where({ parentId: id })
        .getMany();
      if (resCompon.length > 0) {
        await queryRunner.rollbackTransaction();
        return { code: -1, message: '删除失败，请先删除子组件', data: null };
      }
      const data = await this.componModel.delete(id);
      await await queryRunner.commitTransaction();
      return { code: 200, message: '删除成功', data };
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException('删除失败');
    }
  }
}
