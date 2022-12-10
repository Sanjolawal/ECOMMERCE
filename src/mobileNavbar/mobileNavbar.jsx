import "./mobileNavbar.css";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <div className="mobileNavbar">
      <NavLink className="a">
        <ion-icon name="home-outline" class="mobileIcon"></ion-icon>
      </NavLink>
      <NavLink className="a">
        <ion-icon name="heart-outline" class="mobileIcon"></ion-icon>
        <sup className="sup">0</sup>
      </NavLink>
      <NavLink className="a">
        <ion-icon name="bag-handle-outline" class="mobileIcon"></ion-icon>
        <sup className="sup">0</sup>
      </NavLink>
      <NavLink
        className="a 
        animate__animated animate__heartBeat animate__infinite"
      >
        <ion-icon name="grid-outline" class="mobileIcon"></ion-icon>
      </NavLink>
    </div>
  );
};

export default MobileNavbar;
