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

const Server = async () => {
  try {
    const connection = await mongoose.connect(process.env.uri);
    console.log(`Connected to Database`);
    app.use(express.json());
    app.use(router);
    app.use(express.static("dist"));

    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    app.get("*", (req, res) =>
      res.sendFile(path.resolve(__dirname, "dist", "index.html"))
    );
  } catch (error) {
    console.log(error.message);
  }
};

Server();

// import React, { useState, useEffect } from "react";
// import "./App.css";

// const ProductDisplay = () => (
//   <section>
//     <div className="product">
//       <img
//         src="https://i.imgur.com/EHyR2nP.png"
//         alt="The cover of Stubborn Attachments"
//       />
//       <div className="description">
//         <h3>Stubborn Attachments</h3>
//         <h5>$20.00</h5>
//       </div>
//     </div>
//     <form action="/create-checkout-session" method="POST">
//       <button type="submit">Checkout</button>
//     </form>
//   </section>
// );

// const Message = ({ message }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );

// export default function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);

//     if (query.get("success")) {
//       setMessage("Order placed! You will receive an email confirmation.");
//     }

//     if (query.get("canceled")) {
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       );
//     }
//   }, []);

//   return message ? <Message message={message} /> : <ProductDisplay />;
// }
