import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { menuProviders } from './menu.providers';
import { DatabaseModule } from 'src/providers/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MenuController],
  providers: [MenuService, ...menuProviders],
})
export class MenuModule {}
