import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { roleProviders } from './roles.providers';
import { UsersModule } from '../users/users.module';
import { usersProviders } from '../users/users.providers';

@Module({
  imports: [UsersModule],
  controllers: [RolesController],
  providers: [RolesService, ...roleProviders, ...usersProviders],
})
export class RolesModule {}
