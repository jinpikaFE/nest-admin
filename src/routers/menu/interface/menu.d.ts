import { Document } from 'mongoose';

export interface IMenu extends Document {
  readonly name: string;
  readonly path: string;
  readonly lastMenu?: string;
  readonly icon: string;
  readonly status: 0 | 1;
}
