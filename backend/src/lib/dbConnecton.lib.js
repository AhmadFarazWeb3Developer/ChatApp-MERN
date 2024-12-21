import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const mongodb_uri = process.env.MONGODB_URI;
console.log(mongodb_uri);
const connectDatabase = async () => {
  try {
    const dbInstance = await mongoose.connect(`${mongodb_uri}/chatapp`);
    console.log("DB connect to : ", dbInstance.connection.host);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDatabase;
