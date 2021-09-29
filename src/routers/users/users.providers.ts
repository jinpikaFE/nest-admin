import { Connection } from 'mongoose';
import { UserSchema } from './schema/user.schema';

export const usersProviders = [
  {
    provide: 'UserModelToken',
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: ['DbConnectionToken'],
  },
];
