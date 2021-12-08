import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { RuleResType } from 'src/types/global';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { IBill } from './interface/bill';

@Injectable()
export class BillService {
  constructor(
    @Inject('BillModelToken')
    private readonly billModel: Model<IBill>,
  ) {}

  async create(createBillDto: CreateBillDto): Promise<RuleResType<any>> {
    const { date, exRecords, totalConsume } = createBillDto;
    const data = await this.billModel.create({
      date,
      exRecords,
      totalConsume,
    });
    if (data) {
      return { code: 0, message: '创建成功', data };
    }
    return { code: -1, message: '创建失败', data: null };
  }

  async filterQuery(params): Promise<RuleResType<any>> {
    const { current, pageSize, date, startTime, endTime, type } = params;
    const findObj: any = {};
    startTime &&
      endTime &&
      (findObj.date = {
        $gte: new Date(startTime),
        $lte: new Date(endTime),
      });
    // 包含指定type的项
    type && (findObj.exRecords = { $elemMatch: { type: type } });
    let dataQuery = this.billModel.find(findObj);
    if (current && pageSize) {
      dataQuery = dataQuery
        .skip((Number(current) - 1) * Number(pageSize))
        .limit(Number(pageSize));
    }
    let data = await dataQuery.sort({ date: date === 'ascend' ? 1 : -1 });
    const total = await this.billModel.find(findObj).count();
    // 对项进行处理只保留type
    if (type) {
      data = data.map((item) => {
        let total = 0;
        item.exRecords = item?.exRecords.filter((c_item) => {
          if (c_item?.type === type) {
            total += c_item.value;
          }
          return c_item?.type === type;
        });
        item.totalConsume = total;
        return item;
      });
    }
    return { code: 0, message: '查询成功', data, total };
  }

  findOne(id: number) {
    return `This action returns a #${id} bill`;
  }

  async update(
    id: string,
    updateBillDto: UpdateBillDto,
  ): Promise<RuleResType<any>> {
    const data = await this.billModel.findOneAndUpdate(
      { _id: id },
      updateBillDto,
    );
    if (data) {
      return { code: 0, message: '更新成功', data };
    }
    return { code: -1, message: '更新失败', data: null };
  }

  async remove(id: string): Promise<RuleResType<any>> {
    const data = await this.billModel.remove({ _id: id });
    if (data?.deletedCount >= 1) {
      return { code: 0, message: '删除成功', data };
    }
    return { code: -1, message: '删除失败', data: null };
  }
}
