import { Module } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';
import { billProviders } from './bill.providers';

@Module({
  controllers: [BillController],
  providers: [BillService, ...billProviders],
})
export class BillModule {}
