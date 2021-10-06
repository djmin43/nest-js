import { Controller, Get } from '@nestjs/common';
import { FruitAndVegeService } from './fruit-and-vege.service';

@Controller('fruit-and-vege')
export class FruitAndVegeController {
  constructor(private readonly fruitAndVegeService: FruitAndVegeService) {}

  @Get()
  getAllFruitAndVege() {
    return this.fruitAndVegeService.getAllFruitAndVege();
  }
}
