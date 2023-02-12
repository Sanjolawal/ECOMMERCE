import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

const Error = () => {
  return (
    <div className="mainError2">
      <div className="container">
        <p className="error">Oops 404😪 </p>
        <Link to="/" className="link">
          Click me to go back to homepage...
        </Link>
      </div>
    </div>
  );
};

export default Error;
