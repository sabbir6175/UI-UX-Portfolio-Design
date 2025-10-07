"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const users_controller_1 = require("./users.controller");
const router = (0, express_1.Router)();
router.post('/create-user', users_controller_1.userController.createUser);
exports.userRouter = router;
