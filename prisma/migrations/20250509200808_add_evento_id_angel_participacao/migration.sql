/*
  Warnings:

  - You are about to drop the `associacoes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `id_angel` on the `participacoes` table. All the data in the column will be lost.
  - Added the required column `id_angel` to the `eventos` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "associacoes_id_visitor_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "associacoes";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_eventos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "horario" TEXT NOT NULL,
    "lugar" TEXT NOT NULL,
    "id_angel" INTEGER NOT NULL,
    CONSTRAINT "eventos_id_angel_fkey" FOREIGN KEY ("id_angel") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_eventos" ("data", "horario", "id", "lugar", "nome") SELECT "data", "horario", "id", "lugar", "nome" FROM "eventos";
DROP TABLE "eventos";
ALTER TABLE "new_eventos" RENAME TO "eventos";
CREATE TABLE "new_participacoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_evento" INTEGER NOT NULL,
    "id_visitor" INTEGER NOT NULL,
    CONSTRAINT "participacoes_id_evento_fkey" FOREIGN KEY ("id_evento") REFERENCES "eventos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "participacoes_id_visitor_fkey" FOREIGN KEY ("id_visitor") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_participacoes" ("id", "id_evento", "id_visitor") SELECT "id", "id_evento", "id_visitor" FROM "participacoes";
DROP TABLE "participacoes";
ALTER TABLE "new_participacoes" RENAME TO "participacoes";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
