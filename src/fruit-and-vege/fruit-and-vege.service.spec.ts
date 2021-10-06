import { Test, TestingModule } from '@nestjs/testing';
import { FruitAndVegeService } from './fruit-and-vege.service';

describe('FruitAndVegeService', () => {
  let service: FruitAndVegeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FruitAndVegeService],
    }).compile();

    service = module.get<FruitAndVegeService>(FruitAndVegeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
