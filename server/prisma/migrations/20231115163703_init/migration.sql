/*
  Warnings:

  - Added the required column `rating` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "page" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "genres" TEXT NOT NULL
);
INSERT INTO "new_Book" ("author", "genres", "id", "page", "title") SELECT "author", "genres", "id", "page", "title" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
CREATE UNIQUE INDEX "Book_title_key" ON "Book"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
