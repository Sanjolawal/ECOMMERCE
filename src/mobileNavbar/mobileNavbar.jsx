import "./mobileNavbar.css";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MobileNavbar = (props) => {
  const { name } = props;
  const [first, setfirst] = useState(0);

  useEffect(() => {
    const cartfetch = async () => {
      const responseObject = await fetch(`/api/cart`);
      const response = await responseObject.json();
      const value = response.length;
      setfirst(value);
    };
    cartfetch();
  }, []);

  return (
    <div className="mobileNavbar">
      <NavLink to="/" className="a">
        <ion-icon name="home-outline" class="mobileIcon"></ion-icon>
      </NavLink>
      <NavLink className="a">
        <ion-icon name="heart-outline" class="mobileIcon"></ion-icon>
        <sup className="sup">0</sup>
      </NavLink>
      <Link className="a" to="/dashboard/cart">
        <ion-icon name="bag-handle-outline" class="mobileIcon"></ion-icon>
        <sup className="sup">{first}</sup>
      </Link>
      <NavLink
        className="a 
        animate__animated animate__heartBeat animate__infinite"
        onClick={() => {
          name();
        }}
      >
        <ion-icon name="grid-outline" class="mobileIcon"></ion-icon>
      </NavLink>
    </div>
  );
};

export default MobileNavbar;
