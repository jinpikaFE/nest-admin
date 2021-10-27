import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { menuProviders } from './menu.providers';

@Module({
  controllers: [MenuController],
  providers: [MenuService, ...menuProviders],
})
export class MenuModule {}
