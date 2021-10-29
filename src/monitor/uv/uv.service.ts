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
    const { uid, ip, address, startTime, endTime, durationVisit } = createUvDto;
    const data = await this.uvRepository.save({
      uid,
      ip,
      address,
      startTime,
      endTime,
      durationVisit,
    });
    if (data) {
      return { code: 0, message: '创建成功', data };
    }
    return { code: -1, message: '创建失败', data };
  }

  findAll(): Promise<Uv[]> {
    return this.uvRepository.find();
  }

  findOne(id: string): Promise<Uv> {
    return this.uvRepository.findOne(id);
  }
}
