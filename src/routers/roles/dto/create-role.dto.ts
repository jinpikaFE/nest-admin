import { OmitType } from '@nestjs/mapped-types';
import { Role } from '../entities/role.entity';

export class CreateRoleDto extends Role {}
