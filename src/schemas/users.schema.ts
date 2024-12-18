import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id : serial('id').primaryKey(),
    user_email : text('user_email').unique(),
    createdAt : timestamp('createdAt').defaultNow().notNull(),
    updatedAt : timestamp('updatedAt').defaultNow().notNull()
});