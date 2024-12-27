import express, { json } from "express";
import { io, app, server } from "../backend/src/lib/socket.js";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./src/routes/auth.route.js";
import messageRoutes from "./src/routes/message.route.js";
import connectDatabase from "./src/lib/dbConnecton.lib.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

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

const port = process.env.PORT;

connectDatabase().then(() => {
  server.listen(port, (req, res) => {
    console.log("Server is running ...");
  });
});
