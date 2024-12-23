import express, { json } from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./src/routes/auth.route.js";
import messageRoutes from "./src/routes/message.route.js";
import connectDatabase from "./src/lib/dbConnecton.lib.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
  app.listen(port, (req, res) => {
    console.log("Server is running ...");
  });
});
