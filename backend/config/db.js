import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(`${process.env.MONGOBD_URI}`)
    .then(() => console.log("DB connected"));
};
