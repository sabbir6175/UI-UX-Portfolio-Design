import { Router } from "express";
import { userController } from "./users.controller";


const router = Router()

router.post('/create-user', userController.createUser)

export const userRouter  = router;