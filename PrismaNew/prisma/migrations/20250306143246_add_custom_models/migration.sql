/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "DbConnect" (
    "StudentIdFORSMS" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "RegNo1" TEXT NOT NULL,
    "Password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Seats" (
    "SeatId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "StudentIdFORSMS" INTEGER NOT NULL,
    "seatsNo" INTEGER NOT NULL,
    "TimeLimit" TEXT NOT NULL,
    CONSTRAINT "Seats_StudentIdFORSMS_fkey" FOREIGN KEY ("StudentIdFORSMS") REFERENCES "DbConnect" ("StudentIdFORSMS") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Seats_StudentIdFORSMS_key" ON "Seats"("StudentIdFORSMS");
