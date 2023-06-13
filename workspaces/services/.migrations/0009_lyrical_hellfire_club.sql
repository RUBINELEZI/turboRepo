ALTER TABLE "users" ADD COLUMN "confirmed" boolean DEFAULT false;
ALTER TABLE "users" ADD COLUMN "confirmation_code" varchar(36);