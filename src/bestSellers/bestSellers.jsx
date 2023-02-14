import "./bestSellers.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BestSellers = () => {
  const [response, setresponse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const bestSellerFecther = async () => {
      const responseObject = await fetch(`/api/bestseller`, { signal });
      const response = await responseObject.json();
      setresponse(response);
    };
    bestSellerFecther();

    return () => {
      controller.abort();
    };
  }, []);

  const moreInfo = (id) => {
    localStorage.setItem(`productId`, id);
    localStorage.setItem(`productType`, `bestSellers`);
    navigate("/dashboard/products");
  };

  return (
    <div className="bestSeller">
      <h3 className="h3">BEST SELLERS</h3>
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

export default BestSellers;
