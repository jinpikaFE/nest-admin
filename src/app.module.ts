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
import { TypeOrmModule } from '@nestjs/typeorm';
import { UvModule } from './monitor/uv/uv.module';
import { PvModule } from './monitor/pv/pv.module';
console.log(process.env.NODE_ENV);

@Module({
  imports: [
    UsersModule,
    LoginModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'documentation'),
      serveRoot: '/doc',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src/asset'),
      serveRoot: '/asset',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'web'),
      serveRoot: '',
    }),
    MenuModule,
    RolesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.NODE_ENV === 'production' ? 'q847164495' : '123',
      database: 'nest_admin',
      synchronize: true,
      autoLoadEntities: true,
    }),
    UvModule,
    PvModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
