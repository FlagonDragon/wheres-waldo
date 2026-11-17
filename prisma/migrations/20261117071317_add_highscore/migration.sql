-- CreateTable
CREATE TABLE "Highscore" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "time" INTEGER NOT NULL,

    CONSTRAINT "Highscore_pkey" PRIMARY KEY ("id")
);
