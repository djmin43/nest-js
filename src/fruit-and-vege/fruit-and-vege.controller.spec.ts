import { Test, TestingModule } from '@nestjs/testing';
import { FruitAndVegeController } from './fruit-and-vege.controller';

describe('FruitAndVegeController', () => {
  let controller: FruitAndVegeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FruitAndVegeController],
    }).compile();

    controller = module.get<FruitAndVegeController>(FruitAndVegeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
