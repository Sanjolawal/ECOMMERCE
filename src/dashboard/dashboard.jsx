import React from "react";
import Menus from "../menus/menus";
import Promo from "../promo/promo";
import Services from "../services/services";
import Smpromo from "../summerpromo/smpromo";
import Testimonial from "../testimonials/testimonials";
import Carousel from "../carousel/carousel";
import Header from "../header/header";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Promo />
      <Header />
      <Menus />
      <Carousel />
      <div className="container">
        <Testimonial />
        <Smpromo />
        <Services />
      </div>
    </div>
  );
};

export default Dashboard;
