import { PartialType } from '@nestjs/swagger';
import { CreatePvDto } from './create-pv.dto';

export class UpdatePvDto extends PartialType(CreatePvDto) {}
