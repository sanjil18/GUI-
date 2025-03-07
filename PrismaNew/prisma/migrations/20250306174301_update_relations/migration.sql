/*
  Warnings:

  - A unique constraint covering the columns `[RegNo1]` on the table `DbConnect` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DbConnect_RegNo1_key" ON "DbConnect"("RegNo1");
