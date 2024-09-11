import { Router } from "express";
import { sendMessage } from "../Controllers/message.controller.js";

const messageRouter = Router();
messageRouter.post("/send/:id", sendMessage);

export { messageRouter };
