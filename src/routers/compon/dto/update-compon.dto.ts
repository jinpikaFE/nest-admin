import { PartialType } from '@nestjs/swagger';
import { CreateComponDto } from './create-compon.dto';

export class UpdateComponDto extends PartialType(CreateComponDto) {}
