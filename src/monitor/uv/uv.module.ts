import { Module } from '@nestjs/common';
import { UvService } from './uv.service';
import { UvController } from './uv.controller';
import { Uv } from './entities/uv.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pv } from '../pv/entities/pv.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Uv]), TypeOrmModule.forFeature([Pv])],
  controllers: [UvController],
  providers: [UvService],
})
export class UvModule {}
