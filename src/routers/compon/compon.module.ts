import { Module } from '@nestjs/common';
import { ComponService } from './compon.service';
import { ComponController } from './compon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compon } from './entities/compon.entity';
import { Role } from '../roles/entities/role.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Compon]),
    TypeOrmModule.forFeature([Role]),
  ],
  controllers: [ComponController],
  providers: [ComponService],
})
export class ComponModule {}
