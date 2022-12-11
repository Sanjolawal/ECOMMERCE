import "./mobileMenu.css";
import { NavLink } from "react-router-dom";

const Mobilemenu = (props) => {
  const { name, state } = props;
  return (
    <div>
      <div
        className={
          state
            ? `mobileMenu2  animate__animated animate__slideInLeft`
            : `animate__animated animate__slideOutLeft mobileMenu`
        }
      >
        <h1 className="h1">SANJO</h1>
        <NavLink
          to="/"
          title="Home"
          onClick={() => {
            name();
          }}
        >
          HOME
        </NavLink>
        <NavLink
          to="/login"
          title="Login"
          className="animate__animated animate__pulse animate__infinite"
          onClick={() => {
            name();
          }}
        >
          LOGIN
        </NavLink>
        <NavLink
          to="/login"
          title="Signup"
          className="animate__animated animate__pulse animate__infinite"
          onClick={() => {
            name();
          }}
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
      <div
        className={
          state
            ? `second2 animate__animated animate__slideInRight`
            : ` animate__animated animate__slideOutRight second`
        }
        onClick={() => {
          name();
        }}
      ></div>
    </div>
  );
};

export default Mobilemenu;
