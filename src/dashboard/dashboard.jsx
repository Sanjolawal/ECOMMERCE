import React from "react";
import Menus from "../menus/menus";
import Promo from "../promo/promo";
import Services from "../services/services";
import Smpromo from "../summerpromo/smpromo";
import Testimonial from "../testimonials/testimonials";
import Carousel from "../carousel/carousel";
import Header from "../header/header";
import Blog from "../blog/blog";
import BestSellers from "../bestSellers/bestSellers";
import Newproduct from "../newproduct/newproduct";
import Trending from "../trending/trending";
import Dealoftheday from "../dealOfTheDay/dealoftheday";
import Footer from "../footer/footer";
import { useState, useEffect } from "react";
import MobileNavbar from "../mobileNavbar/mobileNavbar";
import Mobilemenu from "../mobileMenu/mobileMenu";
import { useAuth0 } from "@auth0/auth0-react";
import "./dashboard.css";

const Dashboard = () => {
  const [first, setfirst] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const changeState = () => {
    setfirst(!first);
  };

  if (isAuthenticated) {
    return (
      <div className="dashboard">
        <Mobilemenu name={changeState} state={first} />
        <Promo />
        <Header />
        <Menus />
        <Carousel />
        <div className="products">
          <BestSellers />
          <Newproduct />
          <Trending />
        </div>
        <Dealoftheday />
        <div className="container">
          <Testimonial />
          <Smpromo />
          <Services />
        </div>
        <Blog />
        <Footer />
        <MobileNavbar name={changeState} state={first} />
      </div>
    );
  }
  if (!isLoading) {
    window.open(`https://ladieswear.onrender.com`, "_self");
  }
};

export default Dashboard;
