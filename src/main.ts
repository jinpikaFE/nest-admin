import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
