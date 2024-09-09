import { Router } from "express";
import { LoginUser } from "../Controllers/login.controller.js";
import { SignupUser } from "../Controllers/signup.conroller.js";
import { LogoutUser } from "../Controllers/logout.controller.js";

const authRoute = Router();

authRoute.post("/login", LoginUser);
authRoute.post("/signup", SignupUser);
authRoute.post("/logout", LogoutUser);

export { authRoute };
