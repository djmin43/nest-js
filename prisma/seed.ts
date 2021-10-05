import { PrismaClient } from '@prisma/client';
import { fruits } from './fruits';

const prisma = new PrismaClient();

async function main() {
  for (const fruit of fruits) {
    await prisma.fruitAndVege.create({
      data: fruit,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
