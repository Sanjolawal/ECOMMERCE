import "./menus.css";
import { NavLink } from "react-router-dom";

const Menus = () => {
  return (
    <div className="menus">
      <NavLink to="/" title="Home">
        HOME
      </NavLink>
      <a title="Categories">CATEGORIES</a>
      <a title="Mens's">MEN'S</a>
      <a title="Women's">WOMEN'S</a>
      <a title="Jewelry">JEWELRY</a>
      <a title="Perfume">PERFUME</a>
      <a title="Blog">BLOG</a>
      <a title="Hot offers">HOT OFFERS</a>
      <NavLink
        to="/login"
        title="Login"
        className="animate__animated animate__heartBeat animate__infinite"
      >
        LOGIN
      </NavLink>
    </div>
  );
};

export default Menus;
