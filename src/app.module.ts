import { Module } from '@nestjs/common';
import { UsersModule } from './routers/users/users.module';
import { LoginModule } from './routers/login/login.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './filter/all-exceptions.filter';
import { AuthModule } from './logical/auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MenuModule } from './routers/menu/menu.module';
import { RolesModule } from './routers/roles/roles.module';

@Module({
  imports: [
    UsersModule,
    LoginModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'documentation'),
      serveRoot: '/doc',
    }),
    MenuModule,
    RolesModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
