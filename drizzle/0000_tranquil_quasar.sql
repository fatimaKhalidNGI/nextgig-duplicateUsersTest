CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_email" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_user_email_unique" UNIQUE("user_email")
);
