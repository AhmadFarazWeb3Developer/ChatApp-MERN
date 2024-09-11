import { Router } from "express";
import { sendMessage } from "../Controllers/MessageController/sendMessage.controller.js";
import { authenticatedUser } from "../Middlewares/authUser.middleware.js";
import { getMessage } from "../Controllers/MessageController/getMessageController.js";
const messageRouter = Router();

messageRouter.post("/send/:id", authenticatedUser, sendMessage);
messageRouter.get("/:id", authenticatedUser, getMessage);
export { messageRouter };
