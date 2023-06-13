CREATE TABLE IF NOT EXISTS "admins" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(254),
	"active" boolean DEFAULT false,
	"first_name" varchar(32),
	"last_name" varchar(32),
	"gender" varchar(1),
	"phone" varchar(32)
);

CREATE INDEX IF NOT EXISTS "admin_email_idx" ON "admins" ("email");