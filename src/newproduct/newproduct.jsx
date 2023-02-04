import "./newproduct.css";
import products from "../products.json";

const Newproduct = () => {
  const moreInfo = (id) => {
    localStorage.setItem(`productId`, id);
    localStorage.setItem(`productType`, `newproduct`);
    window.open(`/dashboard/products`, "_self");
  };

  return (
    <div className="newProducts">
      <h3 className="h3">New Arrivals</h3>
      {products.map((each) => {
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
