import { Router } from "express";
import { authenticatedUser } from "../Middlewares/authUser.middleware.js";
import { getUsersForSidebar } from "../Controllers/UsersController/users.controller.js";
const userRouter = Router();

userRouter.get("/", authenticatedUser, getUsersForSidebar);
export { userRouter };
