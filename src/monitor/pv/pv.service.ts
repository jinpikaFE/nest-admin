import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RuleResType } from 'src/types/global';
import {
  getCurrentMonthLast,
  getEndYear,
  getFirstDayOfMonth,
  getFirstDayOfYear,
  getLast,
} from 'src/utils';
import { Between, EntityManager, Repository } from 'typeorm';
import { Pv } from './entities/pv.entity';

@Injectable()
export class PvService {
  constructor(
    @InjectRepository(Pv)
    private pvRepository: Repository<Pv>,
  ) {}

  async create(createUvDto: Pv): Promise<RuleResType<any>> {
    const { uid, ip, pathname, startTime, durationVisit, type } = createUvDto;
    const data = await this.pvRepository.save({
      uid,
      ip,
      startTime,
      durationVisit,
      pathname,
      type,
    });
    if (data) {
      return { code: 0, message: '创建成功', data };
    }
    return { code: -1, message: '创建失败', data };
  }

  async findAll(): Promise<RuleResType<Pv[]>> {
    const data = await this.pvRepository.find();
    return { code: 0, message: '查询成功', data };
  }

  async findAndsSatistics(pvManager: EntityManager): Promise<RuleResType<any>> {
    const pvTotal = await pvManager.count(Pv);

    const pvThisYear = await pvManager.count(Pv, {
      startTime: Between(getFirstDayOfYear(new Date()), getEndYear(new Date())),
    });
    console.log(
      getFirstDayOfYear(new Date()),
      getEndYear(new Date()),
      getFirstDayOfMonth(new Date()),
      getCurrentMonthLast(new Date()),
      getLast(new Date()),
      getLast(new Date(), false),
    );

    const pvThisMonth = await pvManager.count(Pv, {
      startTime: Between(
        getFirstDayOfMonth(new Date()),
        getCurrentMonthLast(new Date()),
      ),
    });
    const pvLastDay = await pvManager.count(Pv, {
      startTime: Between(getLast(new Date()), getLast(new Date(), false)),
    });

    const pvPeak = await pvManager.query(
      `SELECT
        MAX(a.num) AS pvPeak
      FROM
        (SELECT DATE(startTime) AS date,COUNT(*) num FROM pv GROUP BY date) a
      `,
    );

    return {
      code: 0,
      message: '查询成功',
      data: {
        pvTotal,
        pvThisYear,
        pvThisMonth,
        pvLastDay,
        pvPeak: Number(pvPeak?.[0].pvPeak),
      },
    };
  }
}
