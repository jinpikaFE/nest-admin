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
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config/config';

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
    /** 环境变量配置 */
    ConfigModule.forRoot({
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // 记得导入 ConfigModule
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.database'),
        synchronize: true,
        autoLoadEntities: true,
        timezone: '+08:00', // 东八时区
      }),
      inject: [ConfigService],
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
