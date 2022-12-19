import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('/users')
export class UserController{


    @Get('/profile')
    getProfile(@Req() req: Request){
        return {
            name: "Chandan Singh"
        }
    }
}