import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RuleResType } from 'src/types/global';
import { Repository } from 'typeorm';
import { Pv } from './entities/pv.entity';

@Injectable()
export class PvService {
  constructor(
    @InjectRepository(Pv)
    private pvRepository: Repository<Pv>,
  ) {}

  async create(createUvDto: Pv): Promise<RuleResType<any>> {
    const { uid, ip, pathname, startTime, durationVisit } = createUvDto;
    const data = await this.pvRepository.save({
      uid,
      ip,
      startTime,
      durationVisit,
      pathname,
    });
    if (data) {
      return { code: 0, message: '创建成功', data };
    }
    return { code: -1, message: '创建失败', data };
  }

  findAll(): Promise<Pv[]> {
    return this.pvRepository.find();
  }
}
