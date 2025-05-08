-- CreateTable
CREATE TABLE "usuarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "idioma" TEXT,
    "cidade" TEXT,
    "disponibilidade" TEXT,
    "tipo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "associacoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_visitor" INTEGER NOT NULL,
    "id_angel" INTEGER NOT NULL,
    CONSTRAINT "associacoes_id_visitor_fkey" FOREIGN KEY ("id_visitor") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "associacoes_id_angel_fkey" FOREIGN KEY ("id_angel") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "eventos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "horario" TEXT NOT NULL,
    "lugar" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "participacoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_evento" INTEGER NOT NULL,
    "id_angel" INTEGER NOT NULL,
    "id_visitor" INTEGER NOT NULL,
    CONSTRAINT "participacoes_id_evento_fkey" FOREIGN KEY ("id_evento") REFERENCES "eventos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "participacoes_id_visitor_fkey" FOREIGN KEY ("id_visitor") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "participacoes_id_angel_fkey" FOREIGN KEY ("id_angel") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "associacoes_id_visitor_key" ON "associacoes"("id_visitor");
