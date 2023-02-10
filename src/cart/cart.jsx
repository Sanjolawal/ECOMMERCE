import React from "react";
import "./cart.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MobileNavbar from "../mobileNavbar/mobileNavbar";

const Cart = () => {
  const [response, setresponse] = useState([]);

  useEffect(() => {
    const cartfetch = async () => {
      const responseObject = await fetch(`/api/cart`);
      const response = await responseObject.json();
      setresponse(response);
    };
    cartfetch();
  }, []);

  if (response.length > 0) {
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
        <div>
          {response.map((each) => {
            return (
              <div className="list">
                <div className="items">
                  <img src={each.image} alt="" className="itemPre" />
                  <p className="p">{each.name}</p>
                </div>
                <p className="price">{each.price}</p>
                <p className="quantity">
                  <span className="negative">-</span>
                  <span className="number">{each.count}</span>
                  <span className="positive">+</span>
                </p>
                <p className="subtotal">$238.00</p>
                <p className="dlt"> ❌</p>
              </div>
            );
          })}
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
        <MobileNavbar />
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
