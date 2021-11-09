import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RuleResType } from 'src/types/global';
import { Between, EntityManager, Like, Repository } from 'typeorm';
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
    let data;
    const findRes = await this.uvRepository.find({ where: { uid } });
    if (!(findRes.length > 0)) {
      data = await this.uvRepository.save({
        uid,
        ip,
        address,
        startTime,
        endTime,
        durationVisit,
        type,
      });
    } else {
      return { code: 0, message: 'cookie未过期不记录uv', data };
    }
    if (data) {
      return { code: 0, message: '创建成功', data };
    }
    return { code: -1, message: '创建失败', data };
  }

  async findAll(params): Promise<RuleResType<Uv[]>> {
    const {
      current,
      pageSize,
      startTime,
      address,
      type,
      startSearchTime,
      endSearchTime,
      durationVisit,
      uid,
    } = params;
    let data = this.uvRepository.createQueryBuilder('uv');
    data = data.where({});
    if (type && type !== 'all') {
      data = data.andWhere({ type });
    }
    if (address) {
      data = data.andWhere({ address: Like(`%${address}%`) });
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

  async findMaps(
    type: string,
  ): Promise<RuleResType<{ name: string; value: number }[]>> {
    const province = {
      北京市: [116.405289, 39.904987],
      澳门特别行政区: [113.54913, 22.19875],
      浙江省: [120.15358, 30.287458],
      浙江省杭州市: [120.15358, 30.287458],
      江西省: [115.892151, 28.676493],
      天津市: [117.190186, 39.125595],
      河北省: [114.502464, 38.045475],
      山西省: [112.549248, 37.857014],
      内蒙古自治区: [111.75199, 40.84149],
      辽宁省: [123.429092, 41.796768],
      吉林省: [125.324501, 43.886841],
      黑龙江省: [126.642464, 45.756966],
      上海市: [121.472641, 31.231707],
      江苏省: [118.76741, 32.041546],
      安徽省: [117.283043, 31.861191],
      福建省: [119.306236, 26.075302],
      山东省: [117.000923, 36.675808],
      河南省: [113.665413, 34.757977],
      湖北省: [114.298569, 30.584354],
      湖南省: [112.982277, 28.19409],
      广东省: [113.28064, 23.125177],
      广西壮族自治区: [108.320007, 22.82402],
      海南省: [110.19989, 20.04422],
      重庆市: [106.504959, 29.533155],
      四川省: [104.065735, 30.659462],
      贵州省: [106.713478, 26.578342],
      云南省: [102.71225, 25.040609],
      西藏自治区: [91.1145, 29.64415],
      陕西省: [108.948021, 34.263161],
      甘肃省: [103.83417, 36.06138],
      青海省: [101.77782, 36.61729],
      宁夏回族自治区: [106.23248, 38.48644],
      新疆维吾尔自治区: [87.61688, 43.82663],
      香港特别行政区: [114.16546, 22.27534],
    };
    const arr = Object.keys(province);
    const data = [];
    let extraObj = {};
    if (type !== 'all') {
      extraObj = { type };
    }
    for (let index = 0; index < arr.length; index++) {
      const item = arr[index];
      data.push({
        name: item,
        value: await this.uvRepository.count({ address: item, ...extraObj }),
      });
    }
    return { code: 0, message: '查询成功', data };
  }

  findOne(id: string): Promise<Uv> {
    return this.uvRepository.findOne(id);
  }

  async findAndsSatistics(
    manager: EntityManager,
    query: { type: string },
  ): Promise<RuleResType<any>> {
    const { type } = query;

    let totalObj: any = {};
    let querySql = 'SELECT AVG(durationVisit) as uvAverageTime FROM uv';
    if (type !== 'all') {
      totalObj = query;
      querySql = `SELECT AVG(durationVisit) as uvAverageTime FROM uv WHERE type='${type}'`;
    }
    const uvTotal = await manager.count(Uv, totalObj);
    const uvAverageTime = await manager.query(querySql);
    return {
      code: 0,
      message: '查询成功',
      data: {
        uvTotal,
        uvAverageTime: uvAverageTime?.[0].uvAverageTime,
      },
    };
  }
}
