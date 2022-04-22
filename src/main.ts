import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import { AllExceptionsFilter } from './filter/all-exceptions.filter';
import { AppModule } from './app.module';
import { logger } from './middleware/logger.middleware';
import * as express from 'express';
import { TransformInterceptor } from './interceptor/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: console });

  // 日志系统同时解决参数日志打印问题
  app.use(express.json({ limit: '50mb' })); // For parsing application/json
  app.use(express.urlencoded({ extended: true, limit: '50mb' })); // For parsing application/x-www-form-urlencoded
  app.use(logger);

  // 使用全局拦截器打印出参
  app.useGlobalInterceptors(new TransformInterceptor());

  const options = new DocumentBuilder()
    .setTitle('JinPiKa')
    .setDescription('nest-admin后台接口')
    .setVersion('1.0')
    .setContact(
      'JinPiKa',
      'https://gitee.com/jinxin0517/nest-admin',
      '847164495@qq.com',
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  /** 生成swagger json使用apifox直接导入 */
  fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
  SwaggerModule.setup('docs', app, document);

  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(3003);
}
bootstrap();
