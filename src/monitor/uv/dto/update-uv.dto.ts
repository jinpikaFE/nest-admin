import { PartialType } from '@nestjs/swagger';
import { CreateUvDto } from './create-uv.dto';

export class UpdateUvDto extends PartialType(CreateUvDto) {}
