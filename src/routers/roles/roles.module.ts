import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { roleProviders } from './roles.providers';

@Module({
  controllers: [RolesController],
  providers: [RolesService, ...roleProviders],
})
export class RolesModule {}
