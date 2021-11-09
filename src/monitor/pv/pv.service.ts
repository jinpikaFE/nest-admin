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
import { Between, EntityManager, Like, Repository } from 'typeorm';
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

  async findAll(params): Promise<RuleResType<Pv[]>> {
    const {
      current,
      pageSize,
      startTime,
      pathname,
      type,
      startSearchTime,
      endSearchTime,
      durationVisit,
      uid,
    } = params;
    let data = this.pvRepository.createQueryBuilder('uv');
    data = data.where({});
    if (type && type !== 'all') {
      data = data.andWhere({ type });
    }
    if (pathname) {
      data = data.andWhere({ pathname: Like(`%${pathname}%`) });
    }
    if (uid) {
      data = data.andWhere({ uid: Like(`%${uid}%`) });
    }
    if (startSearchTime && endSearchTime) {
      data = data.andWhere('startTime BETWEEN :start AND :end', {
        start: startSearchTime,
        end: endSearchTime,
      });
    }
    if (startTime) {
      data = data.orderBy(
        'startTime',
        startTime === 'descend' ? 'DESC' : 'ASC',
      );
    }
    if (durationVisit) {
      data = data.orderBy(
        'durationVisit',
        durationVisit === 'descend' ? 'DESC' : 'ASC',
      );
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
