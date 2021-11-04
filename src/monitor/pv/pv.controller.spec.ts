import { Test, TestingModule } from '@nestjs/testing';
import { PvController } from './pv.controller';
import { PvService } from './pv.service';

describe('PvController', () => {
  let controller: PvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PvController],
      providers: [PvService],
    }).compile();

    controller = module.get<PvController>(PvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
