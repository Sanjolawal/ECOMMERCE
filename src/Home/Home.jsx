import Menus from "../menus/menus";
import Promo from "../promo/promo";
import Services from "../services/services";
import Smpromo from "../summerpromo/smpromo";
import Testimonial from "../testimonials/testimonials";
import Carousel from "../carousel/carousel";
import Footer from "../footer/footer";

import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Promo />
      <Menus />
      <Carousel />
      <div className="container">
        <Testimonial />
        <Smpromo />
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
