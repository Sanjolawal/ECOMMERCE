import React from "react";
import "./header.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [first, setfirst] = useState(0);

  useEffect(() => {
    const cartfetch = async () => {
      const responseObject = await fetch(`/api/cart`);
      const response = await responseObject.json();
      const value = response.length;
      setfirst(value);
    };
    cartfetch();
  }, []);

  return (
    <div className="header">
      <h1 className="h1">SANJO</h1>
      <div className="search">
        <input
          type="text"
          className="searchBox"
          placeholder="Enter your product name here....."
        />
        <ion-icon name="search-outline" class="sIcon"></ion-icon>
      </div>
      <div className="iconsCon">
        <ion-icon name="person-outline" class="icon"></ion-icon>
        <div className="contain">
          <ion-icon name="heart-outline" class="icon"></ion-icon>
          <sup className="sup">0</sup>
        </div>
        <Link className="contain" to="/dashboard/cart">
          <ion-icon name="bag-handle-outline" class="icon"></ion-icon>
          <sup className="sup">{first}</sup>
        </Link>
      </div>
    </div>
  );
};

export default Header;
