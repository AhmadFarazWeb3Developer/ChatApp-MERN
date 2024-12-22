import express from "express";
import protectRoute from "../middlewares/protectRoute.middleware.js";
import sidebarUsers from "../controllers/message/sidebarUsers.controllers.js";
import allMessages from "../controllers/message/allMessages.controller.js";
import sendMessage from "../controllers/message/sendMessage.controller.js";
const messageRoutes = express.Router();

messageRoutes.get("/users", protectRoute, sidebarUsers);
messageRoutes.get("/:id", protectRoute, allMessages);
messageRoutes.get("/sender/:id", protectRoute, sendMessage);
export default messageRoutes;
