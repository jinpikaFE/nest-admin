import { Test, TestingModule } from '@nestjs/testing';
import { PvService } from './pv.service';

describe('PvService', () => {
  let service: PvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PvService],
    }).compile();

    service = module.get<PvService>(PvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
