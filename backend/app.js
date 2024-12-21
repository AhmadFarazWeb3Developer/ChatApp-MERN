import express, { json } from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./src/routes/auth.route.js";
import connectDatabase from "./src/lib/dbConnecton.lib.js";
import bodyParser from "body-parser";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Ahmad Faraz");
});

const port = process.env.PORT;

connectDatabase().then(() => {
  app.listen(port, (req, res) => {
    console.log("Server is running ...");
  });
});
