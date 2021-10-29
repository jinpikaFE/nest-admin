import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RuleResType } from 'src/types/global';
import { Repository } from 'typeorm';
import { CreateUvDto } from './dto/create-uv.dto';
import { Uv } from './entities/uv.entity';

@Injectable()
export class UvService {
  constructor(
    @InjectRepository(Uv)
    private uvRepository: Repository<Uv>,
  ) {}

  async create(createUvDto: Uv): Promise<RuleResType<any>> {
    const { uid, ip, address, startTime, endTime, durationVisit, type } =
      createUvDto;
    const data = await this.uvRepository.save({
      uid,
      ip,
      address,
      startTime,
      endTime,
      durationVisit,
      type,
    });
    if (data) {
      return { code: 0, message: '创建成功', data };
    }
    return { code: -1, message: '创建失败', data };
  }

  async findAll(): Promise<RuleResType<Uv[]>> {
    const data = await this.uvRepository.find();
    return { code: 0, message: '查询成功', data };
  }

  findOne(id: string): Promise<Uv> {
    return this.uvRepository.findOne(id);
  }
}
