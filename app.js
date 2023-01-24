import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const port = 5000;
const app = express();

// app.listen(port, console.log(`Server's listening`));
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// console.log(path.join(__dirname, "dist", "index.html"));
// app.use(express.static(path.join(__dirname, "dist/index.html")));

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });
