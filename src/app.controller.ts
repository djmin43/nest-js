import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Header('Content-Type', 'application/json')
  @Get()
  getHello(): TestObject {
    return this.appService.getHello();
  }
}

interface TestObject {
  test: string;
}
