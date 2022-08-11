/*
  Warnings:

  - Made the column `price` on table `project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cost` on table `project` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `project` MODIFY `price` DECIMAL(19, 4) NOT NULL,
    MODIFY `cost` DECIMAL(19, 4) NOT NULL;
