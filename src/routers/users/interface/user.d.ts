import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly userName: string;
  readonly password: string;
  readonly salt: string;
  readonly email: string;
  readonly phone: string;
  readonly role: string;
  readonly captcha: string;
  readonly avatar?: any[] | string;
}
