import { Request, Response } from "express";
import { userService } from "./users.service";


const createUser = async(req:Request, res: Response)=>{
    const user = await userService.createUser(req.body);

    res.status(201).json({
        statusCode:201,
        success: true,
        message: 'user created successfully',
        data:user,
    })
}
export const userController={
    createUser,
}