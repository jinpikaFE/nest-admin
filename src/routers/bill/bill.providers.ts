import { Connection } from 'mongoose';
import { BillSchema } from './schema/bill.schema';

export const billProviders = [
  {
    provide: 'BillModelToken',
    useFactory: (connection: Connection) =>
      connection.model('Bill', BillSchema),
    inject: ['DbConnectionToken'],
  },
];
