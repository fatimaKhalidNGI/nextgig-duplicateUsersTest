import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { DATABASE_CONNECTION } from 'src/database/dbConn';
import * as usersSchema from '../schemas/users.schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';

@Injectable()
export class UsersService {
    constructor(
        @Inject(DATABASE_CONNECTION)
        private readonly database : NodePgDatabase<typeof usersSchema>  
    ){}

    checkDuplicateUsers = async(email : string) : Promise<{exists : boolean, message : string}> => {
        const duplicateUser = await this.database.query.users.findFirst({
            where : eq(usersSchema.users.user_email, email)
        });

        if(duplicateUser){
            throw new ConflictException('Email address already in use');
        }

        return { exists : false, message : 'Email address not in use'};
    }
}
