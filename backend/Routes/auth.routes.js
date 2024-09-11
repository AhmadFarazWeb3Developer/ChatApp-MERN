import { Router } from "express";
import { LoginUser } from "../Controllers/UserController/login.controller.js";
import { SignupUser } from "../Controllers/UserController/signup.conroller.js";
import { LogoutUser } from "../Controllers/UserController/logout.controller.js";

const authRoute = Router();

authRoute.post("/login", LoginUser);
authRoute.post("/signup", SignupUser);
authRoute.post("/logout", LogoutUser);

export { authRoute };
