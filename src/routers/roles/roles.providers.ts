import { Connection } from 'mongoose';
import { RoleSchema } from './schema/role.schema';

export const roleProviders = [
  {
    provide: 'RoleModelToken',
    useFactory: (connection: Connection) =>
      connection.model('Role', RoleSchema),
    inject: ['DbConnectionToken'],
  },
];
