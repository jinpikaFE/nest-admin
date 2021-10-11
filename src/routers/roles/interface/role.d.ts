import { Document } from 'mongoose';

export interface IRole extends Document {
  readonly name: string;
  readonly authority: string[];
}
