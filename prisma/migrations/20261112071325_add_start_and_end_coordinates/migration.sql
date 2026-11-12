/*
  Warnings:

  - You are about to drop the column `coordX` on the `Target` table. All the data in the column will be lost.
  - You are about to drop the column `coordY` on the `Target` table. All the data in the column will be lost.
  - Added the required column `coordX1` to the `Target` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coordX2` to the `Target` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coordY1` to the `Target` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coordY2` to the `Target` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Target" DROP COLUMN "coordX",
DROP COLUMN "coordY",
ADD COLUMN     "coordX1" INTEGER NOT NULL,
ADD COLUMN     "coordX2" INTEGER NOT NULL,
ADD COLUMN     "coordY1" INTEGER NOT NULL,
ADD COLUMN     "coordY2" INTEGER NOT NULL;
