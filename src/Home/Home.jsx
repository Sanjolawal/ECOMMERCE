import Menus from "../menus/menus";
import Promo from "../promo/promo";
import Services from "../services/services";
import Smpromo from "../summerpromo/smpromo";
import Testimonial from "../testimonials/testimonials";
import Carousel from "../carousel/carousel";
import Footer from "../footer/footer";
import { useState } from "react";
import MobileNavbar from "../mobileNavbar/mobileNavbar";
import Mobilemenu from "../mobileMenu/mobileMenu";

import "./Home.css";
const Home = () => {
  const [first, setfirst] = useState(false);

  const changeState = () => {
    setfirst(!first);
  };

  return (
    <div className="home">
      <Mobilemenu name={changeState} state={first} />
      <Promo />
      <Menus />
      <Carousel />
      <div className="container">
        <Testimonial />
        <Smpromo />
        <Services />
      </div>
      <Footer />
      <MobileNavbar name={changeState} state={first} />
    </div>
  );
};

export default Home;
