import { Module } from '@nestjs/common';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { DATABASE_CONNECTION } from './dbConn';
import * as usersSchema from '../schemas/users.schema';

@Module({
    providers : [{
        provide : DATABASE_CONNECTION,
        useFactory : async () => {
            const dbUrl = process.env.DATABASE_URL;
            const pool = new Pool({
                connectionString : dbUrl
            });

            return drizzle(pool, {
                schema : {
                    ...usersSchema
                }
            })
        }
    }],

    exports : [ DATABASE_CONNECTION ]
})
export class DatabaseModule {}
