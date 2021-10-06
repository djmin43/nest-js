import { Module } from '@nestjs/common';
import { FruitAndVegeController } from './fruit-and-vege.controller';
import { FruitAndVegeService } from './fruit-and-vege.service';

@Module({
  controllers: [FruitAndVegeController],
  providers: [FruitAndVegeService],
})
export class FruitAndVegeModule {}
