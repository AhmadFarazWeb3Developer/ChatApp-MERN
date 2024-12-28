import express, { json } from "express";
import { io, app, server } from "../lib/socket.js";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import connectDatabase from "./lib/dbConnecton.lib.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
import path from "path";

const PORT = process.env.PORT;
const __dirname = path.resolve();
app.use(cookieParser());
app.use(json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.get("/", (req, res) => {
  res.send("Ahmad Faraz");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
connectDatabase().then(() => {
  server.listen(PORT, (req, res) => {
    console.log("Server is running ...");
  });
});
