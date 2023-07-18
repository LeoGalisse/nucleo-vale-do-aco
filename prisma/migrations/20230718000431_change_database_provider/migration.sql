-- CreateTable
CREATE TABLE "users" (
    "_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "good_company_section" (
    "_id" TEXT NOT NULL,
    "number_of_ejs" INTEGER NOT NULL,
    "number_of_employees" INTEGER NOT NULL,
    "number_of_institutes" INTEGER NOT NULL,
    "number_of_cities" INTEGER NOT NULL,

    CONSTRAINT "good_company_section_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "frentes_atuacao_section" (
    "_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT[],
    "quemSomosPageId" TEXT NOT NULL,

    CONSTRAINT "frentes_atuacao_section_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "quem_somos_page" (
    "_id" TEXT NOT NULL,
    "about_section" TEXT NOT NULL,

    CONSTRAINT "quem_somos_page_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "ejs_section" (
    "_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "image" BYTEA NOT NULL,

    CONSTRAINT "ejs_section_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "frentes_atuacao_section_quemSomosPageId_idx" ON "frentes_atuacao_section"("quemSomosPageId");

-- AddForeignKey
ALTER TABLE "frentes_atuacao_section" ADD CONSTRAINT "frentes_atuacao_section_quemSomosPageId_fkey" FOREIGN KEY ("quemSomosPageId") REFERENCES "quem_somos_page"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
