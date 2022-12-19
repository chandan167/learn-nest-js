import { Controller, Get, Req, HttpCode, HttpStatus, Res, Header, Redirect } from "@nestjs/common";
import { Request, Response } from "express";

@Controller('/users')
export class UserController{


    @Get('/profile')
    @HttpCode(HttpStatus.NO_CONTENT)
    @Header('Cache-Control', 'none')
    @Header('X-Name', 'Chandan')
    getProfile(@Req() req: Request, @Res({passthrough: true}) res: Response){
        res.status(200)
        return {
            name: "Chandan Singh"
        }
    }


    @Get('/dynamic/:id')
    dynamicRoute(@Req() req: Request, @Res({passthrough: true}) res: Response){
        res.status(200)
        return req.params
    }


    @Get('/wallet')
    @Redirect('/users/profile')
    wallet(){
        return {
            message: "wallet route"
        }
    }


    @Get('/account')
    @Redirect()
    account(@Req() req: Request, @Res({passthrough: true}) res: Response){
        res.status(200)
        const random = (Math.random() * 10 + 1)

        if(random < 5){
            return {
                url: '/users/profile',
                statusCode: 302
            }
        }else{
            return {
                url: `/users/dynamic/${random}`,
                statusCode: 302
            }
        }
    }
}