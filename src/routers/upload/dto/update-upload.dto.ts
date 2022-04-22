import { PartialType } from '@nestjs/swagger';
import { CreateUploadDto } from './create-upload.dto';

export class UpdateUploadDto extends PartialType(CreateUploadDto) {}
