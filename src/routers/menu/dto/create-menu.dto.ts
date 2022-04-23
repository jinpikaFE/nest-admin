import { OmitType } from '@nestjs/mapped-types';
import { Menu } from '../entities/menu.entity';

export class CreateMenuDto extends OmitType(Menu, [
  'authority',
  'createTime',
  'updateTime',
] as const) {}
