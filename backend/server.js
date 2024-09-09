import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "/.env" });
import { authRoute } from "./Routes/auth.routes.js";
import { connectDB } from "./Database/dbConnection.js";

const app = express();
const PORT = process.env.PORT || 8000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is runing at Port ", PORT);
  });
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/auth", authRoute);
