-- AlterTable
ALTER TABLE "Highscore" ADD COLUMN     "pictureId" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "Highscore" ADD CONSTRAINT "Highscore_pictureId_fkey" FOREIGN KEY ("pictureId") REFERENCES "Picture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
