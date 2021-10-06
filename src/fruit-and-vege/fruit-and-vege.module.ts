import { Module } from '@nestjs/common';
import { FruitAndVegeController } from './fruit-and-vege.controller';

@Module({
  controllers: [FruitAndVegeController]
})
export class FruitAndVegeModule {}
