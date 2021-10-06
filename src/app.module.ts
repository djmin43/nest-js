import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FruitAndVegeModule } from './fruit-and-vege/fruit-and-vege.module';
import { FruitAndVege } from './fruit-and-vege';

@Module({
  imports: [FruitAndVegeModule],
  controllers: [AppController],
  providers: [AppService, FruitAndVege],
})
export class AppModule {}
