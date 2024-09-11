import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import { authRoute } from "./Routes/auth.routes.js";
import { connectDB } from "./Database/dbConnection.js";
import { messageRouter } from "./Routes/message.routes.js";
import cookieParser from "cookie-parser";
import { userRouter } from "./Routes/user.routes.js";
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running at Port", PORT);
  });
});
