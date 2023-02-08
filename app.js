import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes.js";
import path from "path";
import * as url from "url";
const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server is listening`));

app.use(express.static("dist"));

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "dist", "index.html"))
);

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
