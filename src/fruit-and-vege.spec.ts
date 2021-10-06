import { Test, TestingModule } from '@nestjs/testing';
import { FruitAndVege } from './fruit-and-vege';

describe('FruitAndVege', () => {
  let provider: FruitAndVege;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FruitAndVege],
    }).compile();

    provider = module.get<FruitAndVege>(FruitAndVege);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
