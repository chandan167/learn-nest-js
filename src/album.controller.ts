import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('/album')
export class AlbumController{


    @Get()
    getProfile(){
        return "photo"
    }
}