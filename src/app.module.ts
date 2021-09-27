import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [UsersModule, LoginModule],
})
export class AppModule {}
