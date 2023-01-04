import carousel1 from "../images/carousel1-min.jpg";
import carousel2 from "../images/carousel2-min.jpg";
import carousel3 from "../images/carousel3-min.jpg";
import "./carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={100}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="swipeCon">
          <img src={carousel1} alt="carousel" className="img" />
          <div className="caroCon">
            <p className="p">Trending Item </p>
            <h1 className="h1">WOMEN'S LATEST FASHION SALE</h1>
            <p className="p">starting at $ 20.00</p>
            <button
              className="btn animate__animated animate__headShake animate__infinite"
              onClick={() => {
                window.open(`https://wa.link/hn7dp7`, `_blank`);
              }}
            >
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeCon">
          <img src={carousel2} alt="carousel" className="img" />
          <div className="caroCon">
            <p className="p">Trending Accessories </p>
            <h1 className="h1">MODERN SUNGLASSES </h1>
            <p className="p">starting at $ 15.00</p>
            <button
              className="btn animate__animated animate__shakeY animate__infinite"
              onClick={() => {
                window.open(`https://wa.link/hn7dp7`, `_blank`);
              }}
            >
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeCon">
          <img src={carousel3} alt="carousel" className="img" />
          <div className="caroCon">
            <p className="p">Sale Offer </p>
            <h1 className="h1"> NEW FASHION SUMMER SALE </h1>
            <p className="p"> starting at $ 29.99</p>
            <button
              className="btn animate__animated animate__headShake animate__infinite"
              onClick={() => {
                window.open(`https://wa.link/hn7dp7`, `_blank`);
              }}
            >
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
