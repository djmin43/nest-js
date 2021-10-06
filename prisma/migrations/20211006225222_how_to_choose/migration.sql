-- CreateTable
CREATE TABLE "HowToChoose" (
    "id" TEXT NOT NULL,
    "fruitAndVegeId" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "HowToChoose_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "HowToChoose" ADD CONSTRAINT "HowToChoose_fruitAndVegeId_fkey" FOREIGN KEY ("fruitAndVegeId") REFERENCES "FruitAndVege"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
