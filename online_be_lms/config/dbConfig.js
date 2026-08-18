import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL is not defined in .env file");
    }
    const con = await mongoose.connect(process.env.MONGO_URL);
    con && console.log(" mongoDB is connected successfully");
  } catch (error) {
    console.log(error);
  }
};
