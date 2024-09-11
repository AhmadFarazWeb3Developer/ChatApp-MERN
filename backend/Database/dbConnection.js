import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import { DB_NAME } from "../Constants/dbName.js";

const MONGO_URL = process.env.MONGO_URL;
const connectDB = async () => {
  try {
    const database = await mongoose.connect(`${MONGO_URL}/${DB_NAME}`);
    console.log(
      `Database is connected to ${DB_NAME} with `,
      database.connection.host
    );
  } catch (error) {
    console.log("Database connection error: ", error);
    process.exit(1);
  }
};

export { connectDB };
