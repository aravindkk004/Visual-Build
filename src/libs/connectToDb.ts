import mongoose from "mongoose";

let isConnected = false; 

export const connectToDb = async (): Promise<void> => {
  if (isConnected) {
    console.log("✅ Using existing MongoDB connection");
    return;
  }

  if (!process.env.MONGO_URI) {
    throw new Error("❌ MONGO_URI is not defined in environment variables");
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "visualbuild",
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};
