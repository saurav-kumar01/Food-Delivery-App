import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sauravKumar:80773201@food-del.ptykp.mongodb.net/Food-Services"
    )
    .then(() => console.log("Database connected"));
};
