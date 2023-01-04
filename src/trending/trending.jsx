import "./trending.css";
import trending from "../trending.json";

const Trending = () => {
  return (
    <div className="trending">
      <h3 className="h3">Trending</h3>
      {trending.map((each) => {
        const { name, writeUp, price, actualPrice, id, image } = each;
        return (
          <div className="info" key={id}>
            <img src={image} alt="bestSellerImg" className="img" />
            <div className="moreInfo">
              <p className="p">{name}</p>
              <ion-icon name="star" class="star"></ion-icon>
              <ion-icon name="star" class="star"></ion-icon>
              <ion-icon name="star" class="star"></ion-icon>
              <ion-icon name="star" class="star"></ion-icon>
              <ion-icon name="star" class="star"></ion-icon>
              <p className="prices">
                <span className="price">{price}</span>
                {actualPrice}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Trending;
