import { Test, TestingModule } from '@nestjs/testing';
import { ComponController } from './compon.controller';
import { ComponService } from './compon.service';

describe('ComponController', () => {
  let controller: ComponController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComponController],
      providers: [ComponService],
    }).compile();

    controller = module.get<ComponController>(ComponController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
