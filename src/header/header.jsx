import React from "react";
import "./header.css";

const Header = () => {
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
        <div className="contain">
          <ion-icon name="bag-handle-outline" class="icon"></ion-icon>
          <sup className="sup">0</sup>
        </div>
      </div>
    </div>
  );
};

export default Header;
