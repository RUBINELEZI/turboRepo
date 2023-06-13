CREATE TABLE IF NOT EXISTS "customers" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(254),
	"first_name" varchar(32),
	"last_name" varchar(32),
	"platform" varchar(1)
);

CREATE TABLE IF NOT EXISTS "employees" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(254),
	"first_name" varchar(32),
	"last_name" varchar(32),
	"platform" varchar(1),
	"salon_id" integer
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(254),
	"password" varchar(60),
	"created_at" timestamp DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "service_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(64)
);

CREATE TABLE IF NOT EXISTS "services" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(64),
	"category_id" integer
);

CREATE TABLE IF NOT EXISTS "salons" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(64),
	"description" text,
	"cover_image" varchar(256),
	"owner_email" integer,
	"latitude" numeric(100, 15),
	"longitude" numeric(100, 15)
);

CREATE INDEX IF NOT EXISTS "customer_email_idx" ON "customers" ("email");
CREATE INDEX IF NOT EXISTS "employee_email_idx" ON "employees" ("email");
CREATE INDEX IF NOT EXISTS "user_email_idx" ON "users" ("email");