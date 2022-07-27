import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Compon } from '../compon/entities/compon.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Role]),
    TypeOrmModule.forFeature([Compon]),
  ],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
