import "./dealoftheday.css";
import dealoftheday from "../dealOfTheDay.json";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";

const Dealoftheday = () => {
  return (
    <div className="dealoftheDay">
      <h2 className="h2">Deal of the Day</h2>
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
        {dealoftheday.map((each) => {
          const {
            name,
            shortInfo,
            price,
            actualPrice,
            image,
            id,
            sold,
            available,
          } = each;
          return (
            <SwiperSlide key={id} className="dealDay">
              <img src={image} alt="" className="img" />
              <div className="info">
                <div className="stars">
                  <ion-icon name="star" class="star"></ion-icon>
                  <ion-icon name="star" class="star"></ion-icon>
                  <ion-icon name="star" class="star"></ion-icon>
                  <ion-icon name="star" class="star"></ion-icon>
                  <ion-icon name="star" class="star"></ion-icon>
                </div>
                <h4 className="h4">{name}</h4>
                <p className="p">{shortInfo}</p>
                <h2 className="price">
                  {price}
                  <span className="prices">{actualPrice}</span>
                </h2>
                <button
                  className="btn"
                  onClick={() => {
                    window.open(`https://wa.link/hn7dp7`, `_blank`);
                  }}
                >
                  ADD TO CART
                </button>
                <div className="stat">
                  <p className="p">
                    ALREADY SOLD: <span className="total">{sold}</span>
                  </p>
                  <p className="p">
                    AVALAIBLE: <span className="total"> {available}</span>
                  </p>
                </div>
                <h5 className="h5">HURRY UP! OFFER ENDS IN:</h5>
                <div className="date">
                  <div className="time">
                    <h3 className="h3">19</h3>
                    <h6 className="h6">Hours</h6>
                  </div>
                  <div className="time">
                    <h3 className="h3">24</h3>
                    <h6 className="h6">Min</h6>
                  </div>
                  <div className="time">
                    <h3 className="h3">08</h3>
                    <h6 className="h6">Secs</h6>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Dealoftheday;
