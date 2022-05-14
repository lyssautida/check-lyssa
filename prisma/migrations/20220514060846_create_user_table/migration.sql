-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "github_token" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at " TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
