import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sauravKumar:54752173@food-del.ptykp.mongodb.net/Food-Services"
    )
    .then(() => console.log("Database connected"));
};
