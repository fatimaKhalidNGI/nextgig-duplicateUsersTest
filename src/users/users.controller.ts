import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService : UsersService){}

    @Post('checkEmail')
    async checkDuplicateUsers(@Body('email') email : string){
        const checkDuplicate = await this.usersService.checkDuplicateUsers(email);

        if(!checkDuplicate.exists){
            return { message : 'Email address not in use'}
        }
    }
}
