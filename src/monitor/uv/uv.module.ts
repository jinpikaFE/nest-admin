import { Module } from '@nestjs/common';
import { UvService } from './uv.service';
import { UvController } from './uv.controller';
import { Uv } from './entities/uv.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Uv])],
  controllers: [UvController],
  providers: [UvService],
})
export class UvModule {}
