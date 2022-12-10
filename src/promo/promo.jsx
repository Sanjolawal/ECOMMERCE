import "./promo.css";

const Promo = () => {
  return (
    <div className="promo">
      <div className="icons">
        <ion-icon name="logo-linkedin" class="media"></ion-icon>
        <ion-icon name="logo-facebook" class="media"></ion-icon>
        <ion-icon name="logo-twitter" class="media"></ion-icon>
        <ion-icon name="logo-instagram" class="media"></ion-icon>
      </div>
      <p className="p">FREE SHIPPING THIS WEEK ORDER OVER - $55</p>
      <div className="third">
        <select name="" id="" className="opt">
          <option value="">USD $</option>

          <option value="">EURO €</option>
        </select>
        <select name="" id="" className="opt">
          <option value="">ENGLISH</option>
          <option value="">ESPAñOL</option>
          <option value="">FRANçAIS</option>
        </select>
      </div>
    </div>
  );
};

export default Promo;
