CREATE TABLE IF NOT EXISTS "owners" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(254),
	"first_name" varchar(32),
	"last_name" varchar(32),
	"gender" varchar(1),
	"phone" varchar(32)
);

ALTER TABLE "customers" ADD COLUMN "phone" varchar(32);
ALTER TABLE "employees" ADD COLUMN "phone" varchar(32);
CREATE INDEX IF NOT EXISTS "owner_email_idx" ON "owners" ("email");