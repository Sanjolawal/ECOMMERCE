import "./newproduct.css";
import { useEffect, useState } from "react";

const Newproduct = () => {
  const [response, setresponse] = useState([]);
  useEffect(() => {
    const newproductFecther = async () => {
      const responseObject = await fetch(`/api/product`);
      const response = await responseObject.json();
      setresponse(response);
    };
    newproductFecther();
  }, []);

  const moreInfo = (id) => {
    localStorage.setItem(`productId`, id);
    localStorage.setItem(`productType`, `newproduct`);
    window.open(`/dashboard/products`, "_self");
  };

  return (
    <div className="newProducts">
      <h3 className="h3">New Arrivals</h3>
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

export default Newproduct;
