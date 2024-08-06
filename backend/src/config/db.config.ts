import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const DB_URI = process.env.MONGODB_URI || "";

export default async function connectDB() {
  try {
    if (!DB_URI) {
      throw new Error("MONGODB_URI is not defined in the environment");
    }

    await mongoose.connect(DB_URI);

    // await mongoose.connection.dropDatabase();
    console.log("Connected to MongoDB!");
  } catch (error: any) {
    console.error("MongoDB connection error:", error);
  }
}
