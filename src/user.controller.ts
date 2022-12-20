import { Body, Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

let USERS = [];

@Controller('/users')
export class UserController{

    @Post()
    addUser(@Body() createUserDto: CreateUserDto){
        USERS.push(createUserDto);
        return "user added"
    }


    @Get()
    getUsers(){
        return USERS
    }


    @Get(':id')
    getUser(@Param('id') id: number){
        return USERS.find(user => user.id == id)
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() createUserDto: CreateUserDto){
        const userIndex =  USERS.findIndex(user => user.id == id)
        console.log(userIndex);
        if(!userIndex) return 'user not found';
        USERS[userIndex] = createUserDto;
        return 'user updated'
    }


    @Delete(':id')
    deleteUser(@Param('id') id: number){
        USERS = USERS.filter(user => user.id != id);
        return 'user deleted'
    }
   
}