import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

app.get("/", (req, res) => {
  res.send("Ahmad Faraz");
});

const port = process.env.PORT;
app.listen(port, (req, res) => {
  console.log("Server is running ...");
});
