import "./trending.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const [response, setresponse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const trendingFecther = async () => {
      const responseObject = await fetch(`/api/trending`);
      const response = await responseObject.json();
      setresponse(response);
    };
    trendingFecther();
  }, []);

  const moreInfo = (id) => {
    localStorage.setItem(`productId`, id);
    localStorage.setItem(`productType`, `trending`);
    navigate("/dashboard/products");
  };

  return (
    <div className="trending">
      <h3 className="h3">Trending</h3>
      {response.map((each) => {
        const { name, writeUp, price, actualPrice, id, image } = each;
        return (
          <div
            className="info"
            key={id}
            onClick={() => {
              moreInfo(id);
            }}
          >
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
