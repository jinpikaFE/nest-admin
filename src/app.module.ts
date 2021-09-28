import { Module } from '@nestjs/common';
import { UsersModule } from './routers/users/users.module';
import { LoginModule } from './routers/login/login.module';

@Module({
  imports: [UsersModule, LoginModule],
})
export class AppModule {}
