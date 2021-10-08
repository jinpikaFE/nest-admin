import { Connection } from 'mongoose';
import { MenuSchema } from './schema/menu.schema';

export const menuProviders = [
  {
    provide: 'MenuModelToken',
    useFactory: (connection: Connection) =>
      connection.model('Menu', MenuSchema),
    inject: ['DbConnectionToken'],
  },
];
