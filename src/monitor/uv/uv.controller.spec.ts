import { Test, TestingModule } from '@nestjs/testing';
import { UvController } from './uv.controller';
import { UvService } from './uv.service';

describe('UvController', () => {
  let controller: UvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UvController],
      providers: [UvService],
    }).compile();

    controller = module.get<UvController>(UvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
