import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to DB")
    } catch (error){
        console.error("error connecting to mongodb", error);
        process.exit(1);
    }
}