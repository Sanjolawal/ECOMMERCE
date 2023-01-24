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
// import Toprated from "../toprated/toprated";
import Trending from "../trending/trending";
import Dealoftheday from "../dealOfTheDay/dealoftheday";
import Footer from "../footer/footer";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
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
    </div>
  );
};

export default Dashboard;
