import { Router } from "express";
import { authenticatedUser } from "../Middlewares/authUser.middleware.js";
import { getUsersForSidebar } from "../Controllers/UsersController/users.controller.js";
const userRouter = Router();

// THIS IS FOR ONLY AUTHENTICATED USER CAN ACCESS THE CHATS
// userRouter.get("/", authenticatedUser, getUsersForSidebar);
userRouter.get("/", getUsersForSidebar);
export { userRouter };
