import express from "express";
import signup from "../controllers/signup.controller.js";
import login from "../controllers/login.controller.js";
import logout from "../controllers/logout.controller.js";

const authRoutes = express.Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);

export default authRoutes;
