import "./mobileMenu.css";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Mobilemenu = (props) => {
  const { name, state } = props;
  const remove = useRef();
  const { loginWithRedirect, logout } = useAuth0();

  useEffect(() => {
    if (location.pathname === `/`) {
      remove.current.style.display = `block`;
    } else {
      remove.current.style.display = `none`;
    }
    return () => {};
  });

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
        <button
          onClick={() => {
            if (location.pathname === `/`) {
              return loginWithRedirect();
            }
            return logout({
              logoutParams: { returnTo: window.location.origin },
            });
          }}
          className={
            location.pathname === `/`
              ? `animate__animated animate__heartBeat animate__infinite btn`
              : `btn`
          }
        >
          {location.pathname === `/` ? `LOGIN` : `LOGOUT`}
        </button>
        <button
          onClick={() => loginWithRedirect()}
          className={
            location.pathname === `/`
              ? `animate__animated animate__heartBeat animate__infinite btn`
              : `btn`
          }
          ref={remove}
        >
          {location.pathname === `/` ? `SIGNUP` : ``}
        </button>
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
