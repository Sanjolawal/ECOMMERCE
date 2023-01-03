import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//  <ion-icon name="trash-outline"></ion-icon>
//   <ion-icon name="chevron-down-outline"></ion-icon>
// <ion-icon name="star"></ion-icon>;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
