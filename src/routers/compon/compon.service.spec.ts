import { Test, TestingModule } from '@nestjs/testing';
import { ComponService } from './compon.service';

describe('ComponService', () => {
  let service: ComponService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComponService],
    }).compile();

    service = module.get<ComponService>(ComponService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
