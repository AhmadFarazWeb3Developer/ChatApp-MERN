import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import { authRoute } from "./Routes/auth.routes.js";
import { connectDB } from "./Database/dbConnection.js";
import { messageRouter } from "./Routes/message.routes.js";
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running at Port", PORT);
  });
});
