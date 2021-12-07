import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IExRecord } from '../interface/bill';

export class CreateBillDto {
  @IsString({ message: '日期必须是 String 类型' })
  @IsNotEmpty({ message: '日期不能为空' })
  @ApiProperty({ uniqueItems: true })
  readonly date: Date;

  @IsArray({ message: '消费记录必须是 Array 类型' })
  @ApiProperty()
  readonly exRecords: IExRecord[];

  @IsNumber({}, { message: '总消费额必须是 Number 类型' })
  @IsNotEmpty({ message: '总消费额不能为空' })
  @ApiProperty()
  readonly totalConsume: number;
}
