import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-nlwsjf4mdv6nl8rf.us.auth0.com"
        clientId="liF98v7fXrdn0IIT0gwNOKOsNVPMQ2Fb"
        authorizationParams={{
          redirect_uri: `https://ecommerce-production-dd3e.up.railway.app/dashboard`,
          // redirect_uri: `http://localhost:5000/dashboard`,
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
