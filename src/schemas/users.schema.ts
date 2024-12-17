import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id : serial('id').primaryKey(),
    user_email : text('user_email').unique()
});