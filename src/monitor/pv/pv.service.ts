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

  async findAndsSatistics(
    pvManager: EntityManager,
    query: { type: string },
  ): Promise<RuleResType<any>> {
    const { type } = query;
    let totalObj: any = {};
    let querySql =
      'SELECT DATE(startTime) AS date,COUNT(*) num FROM pv GROUP BY date';
    if (type !== 'all') {
      totalObj = query;
      querySql = `SELECT DATE(startTime) AS date,COUNT(*) num FROM pv WHERE type='${type}' GROUP BY date`;
    }
    const pvTotal = await pvManager.count(Pv, totalObj);

    const pvThisYear = await pvManager.count(Pv, {
      startTime: Between(getFirstDayOfYear(new Date()), getEndYear(new Date())),
      ...totalObj,
    });

    const pvThisMonth = await pvManager.count(Pv, {
      startTime: Between(
        getFirstDayOfMonth(new Date()),
        getCurrentMonthLast(new Date()),
      ),
      ...totalObj,
    });
    const pvLastDay = await pvManager.count(Pv, {
      startTime: Between(getLast(new Date()), getLast(new Date(), false)),
      ...totalObj,
    });

    const pvPeak = await pvManager.query(
      `SELECT
        MAX(a.num) AS pvPeak
      FROM
        (${querySql}) a
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
