import { PartialType } from '@nestjs/swagger';
import { CreateSmsDto } from './create-sms.dto';

export class UpdateSmsDto extends PartialType(CreateSmsDto) {}
