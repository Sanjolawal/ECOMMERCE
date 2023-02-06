import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes.js";
const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server is listening`));

const Server = async () => {
  try {
    const connection = await mongoose.connect(process.env.uri);
    console.log(`Connected to Database`);
    app.use(router);
  } catch (error) {
    console.log(error.message);
  }
};

Server();
