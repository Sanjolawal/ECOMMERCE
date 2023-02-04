import React from "react";
import "./cart.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const [first, setfirst] = useState(false);
  if (!first) {
    return (
      <div className="cart">
        <Header />
        <div className="name">Products / Cart</div>
        <div className="titles">
          <h3 className="h3">ITEMS</h3>
          <h3 className="h3">PRICE</h3>
          <h3 className="h3">QUANTITY</h3>
          <h3 className="h3">SUBTOTAL</h3>
          <h3 className="h3">DELETE</h3>
        </div>
        <div className="list">
          <div className="items">
            <img
              src="
            https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/sports-3.jpg"
              alt=""
              className="itemPre"
            />
            <p className="p">Women's party wear shoes</p>
          </div>
          <p className="price">$49.00</p>
          <p className="quantity">
            <span className="negative">-</span>
            <span className="number">0</span>
            <span className="positive">+</span>
          </p>
          <p className="subtotal">$238.00</p>
          <p className="dlt"> ❌</p>
        </div>
        <div className="list">
          <div className="items">
            <img
              src="
            https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-4.jpg"
              alt=""
              className="itemPre"
            />
            <p className="p">Women's party wear shoes</p>
          </div>
          <p className="price">$49.00</p>
          <p className="quantity">
            <span className="negative">-</span>
            <span className="number">0</span>
            <span className="positive">+</span>
          </p>
          <p className="subtotal">$238.00</p>
          <p className="dlt"> ❌</p>
        </div>
        <div className="list">
          <div className="items">
            <img
              src="
            https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/2.jpg"
              alt=""
              className="itemPre"
            />
            <p className="p">Men's Hoodies T-Shirt</p>
          </div>
          <p className="price">$49.00</p>
          <p className="quantity">
            <span className="negative">-</span>
            <span className="number">0</span>
            <span className="positive">+</span>
          </p>
          <p className="subtotal">$238.00</p>
          <p className="dlt"> ❌</p>
        </div>

        <div className="controls">
          <button className="btn1">Continue Shopping</button>
          <button className="btn2">Clear Shopping Cart</button>
        </div>
        <div className="orderBox">
          <div className="detail">
            <div className="detail1">
              <p className="info">Subtotal:</p>
              <p className="fee">$1800</p>
            </div>
            <div className="detail2">
              <p className="info">Shipping Fee:</p>
              <p className="fee">$5.34</p>
            </div>
          </div>
          <div className="total">
            <p className="info">Order Total:</p>
            <p className="fee">$1869.28</p>
          </div>
        </div>
        <button className="checkout">Checkout Now</button>
        <Footer />
      </div>
    );
  }
  return (
    <div className="cart">
      <Header />
      <div className="cartCon">
        <h1 className="h1">Your Cart is empty</h1>
        <Link to="/dashboard" className="link">
          Fill it
        </Link>
      </div>
    </div>
  );
};

export default Cart;
