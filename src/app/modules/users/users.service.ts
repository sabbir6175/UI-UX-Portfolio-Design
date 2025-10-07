import { IUser } from "./users.interface";
import UserModel from "./users.model";


const createUser = async (payload:Partial<IUser> )=> {
    const user = await UserModel.create(payload)

    return user
}

export const userService ={
    createUser
}