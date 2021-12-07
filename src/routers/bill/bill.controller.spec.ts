import { Test, TestingModule } from '@nestjs/testing';
import { BillController } from './bill.controller';
import { BillService } from './bill.service';

describe('BillController', () => {
  let controller: BillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillController],
      providers: [BillService],
    }).compile();

    controller = module.get<BillController>(BillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
