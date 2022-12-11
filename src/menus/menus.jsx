import "./menus.css";
import { NavLink } from "react-router-dom";

const Menus = () => {
  return (
    <div className="menus">
      <NavLink to="/" title="Home">
        HOME
      </NavLink>
      <NavLink
        to="/login"
        title="Login"
        className="animate__animated animate__heartBeat animate__infinite"
      >
        LOGIN
      </NavLink>
      <NavLink
        to="/login"
        title="Signup"
        className="animate__animated animate__heartBeat animate__infinite"
      >
        SIGNUP
      </NavLink>
      <a title="Categories">CATEGORIES</a>
      <a title="Mens's">MEN'S</a>
      <a title="Women's">WOMEN'S</a>
      <a title="Jewelry">JEWELRY</a>
      <a title="Blog">BLOG</a>
      <a title="Hot offers">HOT OFFERS</a>
    </div>
  );
};

export default Menus;
