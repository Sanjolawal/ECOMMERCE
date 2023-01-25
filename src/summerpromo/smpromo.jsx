import "./smpromo.css";
import promobanner from "../images/promobanner.jpg";
import { NavLink } from "react-router-dom";

const Smpromo = () => {
  return (
    <div className="promoImg">
      <img src={promobanner} alt="banner" className="banner" />
      <div className="test">
        <button className="btn">25% DISCOUNT</button>
        <h1 className="h1">Summer Collection</h1>
        <p className="p">Starting @ $10</p>
        <NavLink
          to=""
          className="
        animate__animated animate__heartBeat animate__infinite"
          onClick={() => {}}
        >
          SHOP NOW
        </NavLink>
      </div>
    </div>
  );
};

export default Smpromo;
