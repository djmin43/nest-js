/*
  Warnings:

  - The primary key for the `FruitAndVege` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "FruitAndVege" DROP CONSTRAINT "FruitAndVege_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "FruitAndVege_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "FruitAndVege_id_seq";
