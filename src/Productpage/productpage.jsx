import React from "react";
// import Promo from "../promo/promo";
import Header from "../header/header";
import BestSellers from "../bestsellers.json";
import Trending from "../trending.json";
import Newproduct from "../products.json";
import { useState } from "react";
import "./productpage.css";
import Footer from "../footer/footer";

const Productpage = () => {
  let [count, setcount] = useState(1);

  function Increase() {
    if (count > 8) {
      count = 9;
      return setcount(count);
    }
    setcount(count + 1);
  }

  const Decrease = () => {
    if (count < 2) {
      count = 1;
      return setcount(count);
    }
    setcount(count - 1);
  };

  const id = localStorage.getItem(`productId`);
  const productType = localStorage.getItem(`productType`);
  if (productType === `bestSellers`) {
    const product = BestSellers.filter((each) => {
      return each.id === Number(id);
    });
    const { actualPrice, name, writeUp, image, price } = product[0];
    return (
      <div className="product">
        <Header />
        <div className="name">Products / {name}</div>
        <button
          className="goBack"
          onClick={() => {
            window.open(`/dashboard`, "_self");
          }}
        >
          Back to products
        </button>
        <div className="productCon">
          <div className="images">
            <img src={image} alt="productImage" className="mainImg" />
            <div className="imgCon2">
              <img src={image} alt="productImage" className="subImg" />
              <img src={image} alt="productImage" className="subImg" />
              <img src={image} alt="productImage" className="subImg" />
              <img src={image} alt="productImage" className="subImg" />
              <img src={image} alt="productImage" className="subImg" />
            </div>
          </div>
          <div className="info">
            <h1 className="h1">{name}</h1>
            <h2 className="h2">
              {actualPrice}
              <span className="span">{price}</span>
            </h2>
            <p className="p">{writeUp}</p>
            <h1 className="h1">
              <span
                className="decrease"
                onClick={() => {
                  Decrease();
                }}
              >
                -
              </span>
              {count}
              <span
                className="increase"
                onClick={() => {
                  Increase();
                }}
              >
                +
              </span>
            </h1>
            <button
              className="btn"
              onClick={() => {
                //   if (localStorage.getItem(`count`)) {
                //     let number = localStorage.getItem(`count`);
                //     number = Number(number) + 1;
                //     localStorage.setItem(`count`, number);
                //     number = String(number);
                //     localStorage.setItem(`name${number}`, name);
                //     localStorage.setItem(`count${number}`, count);
                //     localStorage.setItem(`productType${number}`, productType);
                //   } else {
                //     localStorage.setItem(`count`, 1);
                //     let number = localStorage.getItem(`count`);
                //     number = String(number);
                //     localStorage.setItem(`name${number}`, name);
                //     localStorage.setItem(`count${number}`, count);
                //     localStorage.setItem(`productType${number}`, productType);
                //   }
                //
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  if (productType === `trending`) {
    const product = Trending.filter((each) => {
      return each.id === Number(id);
    });
    const { actualPrice, name, writeUp, image, price } = product[0];
    return (
      <div className="product">
        <Header />
        <div className="name">Products / {name}</div>
        <button
          className="goBack"
          onClick={() => {
            window.open(`/dashboard`, "_self");
          }}
        >
          Back to products
        </button>
        <div className="productCon">
          <div className="images">
            <img src={image} alt="productImage" className="mainImg" />
            <div className="imgCon2">
              <img src={image} alt="productImage" className="subImg" />
              <img src={image} alt="productImage" className="subImg" />
              <img src={image} alt="productImage" className="subImg" />
              <img src={image} alt="productImage" className="subImg" />
              <img src={image} alt="productImage" className="subImg" />
            </div>
          </div>
          <div className="info">
            <h1 className="h1">{name}</h1>
            <h2 className="h2">
              {actualPrice}
              <span className="span">{price}</span>
            </h2>
            <p className="p">{writeUp}</p>
            <h1 className="h1">
              <span
                className="decrease"
                onClick={() => {
                  Decrease();
                }}
              >
                -
              </span>
              {count}
              <span
                className="increase"
                onClick={() => {
                  Increase();
                }}
              >
                +
              </span>
            </h1>
            <button
              className="btn"
              onClick={() => {
                // if (localStorage.getItem(`count`)) {
                //   let number = localStorage.getItem(`count`);
                //   number = Number(number) + 1;
                //   localStorage.setItem(`count`, number);
                //   number = String(number);
                //   localStorage.setItem(`name${number}`, name);
                //   localStorage.setItem(`count${number}`, count);
                //   localStorage.setItem(`productType${number}`, productType);
                // } else {
                //   localStorage.setItem(`count`, 1);
                //   let number = localStorage.getItem(`count`);
                //   number = String(number);
                //   localStorage.setItem(`name${number}`, name);
                //   localStorage.setItem(`count${number}`, count);
                //   localStorage.setItem(`productType${number}`, productType);
                // }
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  if (productType === `newproduct`) {
    const product = Newproduct.filter((each) => {
      return each.id === Number(id);
    });
    const { actualPrice, name, writeUp, image, price } = product[0];
    return (
      <div className="product">
        <Header />
        <div className="name">Products / {name}</div>
        <button
          className="goBack"
          onClick={() => {
            window.open(`/dashboard`, "_self");
          }}
        >
          Back to products
        </button>
        <div className="productCon">
          <div className="images">
            <img src={image} alt="productImage" className="mainImg" />
            <div className="imgCon2">
              <img src={image} alt="productImage" className="subImg" />
              <img src={image} alt="productImage" className="subImg" />
              <img src={image} alt="productImage" className="subImg" />
              <img src={image} alt="productImage" className="subImg" />
              <img src={image} alt="productImage" className="subImg" />
            </div>
          </div>
          <div className="info">
            <h1 className="h1">{name}</h1>
            <h2 className="h2">
              {actualPrice}
              <span className="span">{price}</span>
            </h2>
            <p className="p">{writeUp}</p>
            <h1 className="h1">
              <span
                className="decrease"
                onClick={() => {
                  Decrease();
                }}
              >
                -
              </span>
              {count}
              <span
                className="increase"
                onClick={() => {
                  Increase();
                }}
              >
                +
              </span>
            </h1>
            <button
              className="btn"
              onClick={() => {
                // if (localStorage.getItem(`count`)) {
                //   let number = localStorage.getItem(`count`);
                //   number = Number(number) + 1;
                //   localStorage.setItem(`count`, number);
                //   number = String(number);
                //   localStorage.setItem(`name${number}`, name);
                //   localStorage.setItem(`count${number}`, count);
                //   localStorage.setItem(`productType${number}`, productType);
                // } else {
                //   localStorage.setItem(`count`, 1);
                //   let number = localStorage.getItem(`count`);
                //   number = String(number);
                //   localStorage.setItem(`name${number}`, name);
                //   localStorage.setItem(`count${number}`, count);
                //   localStorage.setItem(`productType${number}`, productType);
                // }
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Productpage;
