import { Injectable } from '@nestjs/common';
import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class FruitAndVegeService {
  async getAllFruitAndVege() {
    const result = await prisma.fruitAndVege.findMany();
    return result;
  }
}
