import { Module } from '@nestjs/common';
import { ComponService } from './compon.service';
import { ComponController } from './compon.controller';

@Module({
  controllers: [ComponController],
  providers: [ComponService],
})
export class ComponModule {}
