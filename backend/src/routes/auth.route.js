import express from "express";
import signup from "../controllers/auth/signup.controller.js";
import login from "../controllers/auth/login.controller.js";
import logout from "../controllers/auth/logout.controller.js";
import protectRoute from "../middlewares/protectRoute.middleware.js";
import updateProfile from "../controllers/auth/updateProfile.controller.js";
import checkAuth from "../controllers/auth/checkAuth.controller.js";

const authRoutes = express.Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);

authRoutes.put("/update-profile", protectRoute, updateProfile);

authRoutes.get("/check", protectRoute, checkAuth); // will call this route when the page is reloaded
export default authRoutes;
