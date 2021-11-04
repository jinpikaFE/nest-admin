import { Module } from '@nestjs/common';
import { PvService } from './pv.service';
import { PvController } from './pv.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pv } from './entities/pv.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pv])],
  controllers: [PvController],
  providers: [PvService],
})
export class PvModule {}
