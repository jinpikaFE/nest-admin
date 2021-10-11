import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { DatabaseModule } from 'src/providers/database/database.module';
import { roleProviders } from './roles.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [RolesController],
  providers: [RolesService, ...roleProviders],
})
export class RolesModule {}
