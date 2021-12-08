import { Document } from 'mongoose';

export interface IExRecord {
  type: string;
  value: number;
}

export interface IBill extends Document {
  readonly date: Date;
  exRecords: IExRecord[];
  totalConsume: number;
}
