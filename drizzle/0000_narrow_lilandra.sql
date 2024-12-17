CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_email" text,
	CONSTRAINT "users_user_email_unique" UNIQUE("user_email")
);
