import React from "react";
import "./cart.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MobileNavbar from "../mobileNavbar/mobileNavbar";
import Mobilemenu from "../mobileMenu/mobileMenu";


const Cart = () => {
  const [response, setresponse] = useState([]);
  const [total, settotal] = useState(0);
  const [first, setfirst] = useState(false);

  const changeState = () => {
    setfirst(!first);
  };

  useEffect(() => {
    const cartfetch = async () => {
      const responseObject = await fetch(`/api/cart`);
      const response = await responseObject.json();

      const allTotal = response.map((each) => {
        return each.total;
      });

      const totalPrice = allTotal.reduce((a, b) => a + b, 0);
      setresponse(response);
      settotal(totalPrice);
    };
    cartfetch();
  }, []);

  const Delete = async (_id) => {
    console.log(_id);
    await fetch(`/api/cart/${_id}`, {
      method: `DELETE`,
    });

    const responseObject = await fetch(`/api/cart`);
    const response = await responseObject.json();

    const allTotal = response.map((each) => {
      return each.total;
    });

    const totalPrice = allTotal.reduce((a, b) => a + b, 0);
    setresponse(response);
    settotal(totalPrice);
  };

  const DeleteAll = async (_id) => {
    await fetch(`/api/cart`, {
      method: `DELETE`,
    });

    const responseObject = await fetch(`/api/cart`);
    const response = await responseObject.json();
    setresponse(response);
  };

  // const stripe = async () => {
  //   const responseObject = await fetch("/create-payment-intent", {
  //     method: `POST`,
  //   });
  //   const response = await responseObject.json();
  //   // window.location.replace(response.clientSecret);
  //   console.log(response.clientSecret);
  // };

 

  if (response.length > 0) {
    return (
      <div className="cart">
        <Mobilemenu name={changeState} state={first} />
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
            const { _id } = each;
            return (
              <div className="list" key={_id}>
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
                <p className="subtotal">{`$${each.total}`}</p>
                <p
                  className="dlt"
                  onClick={() => {
                    Delete(_id);
                  }}
                >
                  ❌
                </p>
              </div>
            );
          })}
        </div>

        <div className="controls">
          <Link to="/dashboard" className="btn1">
            Continue Shopping
          </Link>
          <button
            className="btn2"
            onClick={() => {
              DeleteAll();
            }}
          >
            Clear Shopping Cart
          </button>
        </div>
        <div className="orderBox">
          <div className="detail">
            <div className="detail1">
              <p className="info">Subtotal:</p>
              <p className="fee">{`$${total}`}</p>
            </div>
            <div className="detail2">
              <p className="info">Shipping Fee:</p>
              <p className="fee">$5.34</p>
            </div>
          </div>
          <div className="total">
            <p className="info">Order Total:</p>
            <p className="fee">{`$${total + 5.34}`}</p>
          </div>
        </div>
        <Link to="/checkout" className="checkout">
          Checkout Now
        </Link>
        <Footer />
        <MobileNavbar name={changeState} state={first} />
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
