-- CreateTable
CREATE TABLE "Municipio" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "img" TEXT,
    "uf" TEXT NOT NULL DEFAULT 'ES',
    "aprovados" INTEGER NOT NULL DEFAULT 0,
    "protocolados" INTEGER NOT NULL DEFAULT 0,
    "destaque" BOOLEAN NOT NULL DEFAULT false,
    "sitePrefeitura" TEXT,
    "siteCamara" TEXT,

    CONSTRAINT "Municipio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vereador" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "whatsapp" TEXT,
    "email" TEXT,
    "partido" TEXT,
    "fotoUrl" TEXT,
    "destaque" BOOLEAN NOT NULL DEFAULT false,
    "aprovacoes" INTEGER NOT NULL DEFAULT 0,
    "protocolados" INTEGER NOT NULL DEFAULT 0,
    "municipioId" INTEGER NOT NULL,

    CONSTRAINT "Vereador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lead" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bairro" TEXT,
    "cidade" TEXT NOT NULL,
    "whatsapp" TEXT,
    "type" TEXT NOT NULL DEFAULT 'lead',
    "dataCadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "municipioId" INTEGER NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "dataCadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Vereador" ADD CONSTRAINT "Vereador_municipioId_fkey" FOREIGN KEY ("municipioId") REFERENCES "Municipio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_municipioId_fkey" FOREIGN KEY ("municipioId") REFERENCES "Municipio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
