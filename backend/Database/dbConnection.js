import mongoose from "mongoose";
import { DB_NAME } from "../Constants/dbName.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

//

const MONGO_URL = process.env.MONGO_URL;
const connectDB = async () => {
  const database = await mongoose.connect(`${MONGO_URL}/${DB_NAME}`);
  console.log("Database is connected to ");
};

export { connectDB };
