import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FruitAndVegeModule } from './fruit-and-vege/fruit-and-vege.module';

@Module({
  imports: [FruitAndVegeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
