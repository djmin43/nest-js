import { Injectable } from '@nestjs/common';
import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AppService {
  async getAllUsers() {
    const allUsers = await prisma.user.findMany();
    console.log(allUsers);
  }

  async createNewUser(name, email) {
    console.log(name, email);
    await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });
  }
}
