import { OmitType } from '@nestjs/mapped-types';
import { Menu } from '../schema/menu.schema';

export class CreateMenuDto extends OmitType(Menu, [
  'authority',
  'registerTime',
] as const) {}
