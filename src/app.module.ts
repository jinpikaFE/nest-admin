import { Module } from '@nestjs/common';
import { UsersModule } from './routers/users/users.module';
import { LoginModule } from './routers/login/login.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './filter/all-exceptions.filter';
import { AuthModule } from './logical/auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { RolesModule } from './routers/roles/roles.module';
import { UploadModule } from './routers/upload/upload.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComponModule } from './routers/compon/compon.module';
import { SmsModule } from './routers/sms/sms.module';

@Module({
  imports: [
    LoginModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'documentation'),
      serveRoot: '/doc',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src/assets'),
      serveRoot: '/asset',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'web'),
      serveRoot: '',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'q847164495',
      database: 'nest_admin',
      synchronize: true,
      autoLoadEntities: true,
      timezone: '+08:00', // 东八时区
    }),
    UsersModule,
    RolesModule,
    UploadModule,
    ComponModule,
    SmsModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
