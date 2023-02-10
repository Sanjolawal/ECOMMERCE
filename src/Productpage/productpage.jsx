import React from "react";
import Header from "../header/header";
import { useState, useEffect } from "react";
import "./productpage.css";
import Footer from "../footer/footer";
import { Link, useNavigate } from "react-router-dom";
import MobileNavbar from "../mobileNavbar/mobileNavbar";

const Productpage = () => {
  let [count, setcount] = useState(1);
  const [response, setresponse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (productType === `bestSellers`) {
      const bestSellerFecther = async () => {
        const responseObject = await fetch(`/api/bestseller`);
        const response = await responseObject.json();
        setresponse(response);
      };
      bestSellerFecther();
    } else if (productType === `trending`) {
      const trendingFecther = async () => {
        const responseObject = await fetch(`/api/trending`);
        const response = await responseObject.json();
        setresponse(response);
      };
      trendingFecther();
    } else {
      const productFecther = async () => {
        const responseObject = await fetch(`/api/product`);
        const response = await responseObject.json();
        setresponse(response);
      };
      productFecther();
    }
  }, []);

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

  const toCart = async (name, actualPrice, count, image) => {
    const sendingData = await fetch(`/api/cart`, {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: actualPrice,
        count: count,
        image: image,
      }),
    });
    navigate(`/dashboard/cart`);
  };

  const id = localStorage.getItem(`productId`);
  const productType = localStorage.getItem(`productType`);
  if (productType === `bestSellers`) {
    const product = response.filter((each) => {
      return each.id === Number(id);
    });
    if (product.length === 0) {
      return <div>loading...</div>;
    }
    const { actualPrice, name, writeUp, image, price } = product[0];
    return (
      <div className="product">
        <Header />
        <div className="name">Products / {name}</div>
        <Link to="/dashboard" className="goBack">
          Back to products
        </Link>
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
                toCart(name, actualPrice, count, image);
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
        <Footer />
        <MobileNavbar />
      </div>
    );
  }
  if (productType === `trending`) {
    const product = response.filter((each) => {
      return each.id === Number(id);
    });
    if (product.length === 0) {
      return <div>Loading...</div>;
    }
    const { actualPrice, name, writeUp, image, price } = product[0];
    return (
      <div className="product">
        <Header />
        <div className="name">Products / {name}</div>
        <Link className="goBack" to="/dashboard">
          Back to products
        </Link>
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
                toCart(name, actualPrice, count, image);
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
        <Footer />
        <MobileNavbar />
      </div>
    );
  }
  if (productType === `newproduct`) {
    const product = response.filter((each) => {
      return each.id === Number(id);
    });
    if (product.length === 0) {
      return <div>Loading...</div>;
    }
    const { actualPrice, name, writeUp, image, price } = product[0];
    return (
      <div className="product">
        <Header />
        <div className="name">Products / {name}</div>
        <Link className="goBack" to="/dashboard">
          Back to products
        </Link>
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
                toCart(name, actualPrice, count, image);
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
        <Footer />
        <MobileNavbar />
      </div>
    );
  }
};

export default Productpage;
