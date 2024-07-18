import mongoose from "mongoose";


export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://greatstack:54752173@cluster0.vv1t9tm.mongodb.net/Food-Services').then(() =>console.log("DB connected"));
}
