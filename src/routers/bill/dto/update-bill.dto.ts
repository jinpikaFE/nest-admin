import { PartialType } from '@nestjs/swagger';
import { CreateBillDto } from './create-bill.dto';

export class UpdateBillDto extends PartialType(CreateBillDto) {}
