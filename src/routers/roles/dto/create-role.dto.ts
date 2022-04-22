import { OmitType } from '@nestjs/mapped-types';
import { Role } from '../schema/role.schema';

export class CreateRoleDto extends OmitType(Role, ['registerTime'] as const) {}
