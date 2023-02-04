import "./mobileMenu.css";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Mobilemenu = (props) => {
  const { name, state } = props;
  const remove = useRef();
  const { loginWithRedirect, logout } = useAuth0();

  useEffect(() => {
    if (location.pathname === `/dashboard`) {
      remove.current.style.display = `none`;
    } else {
      remove.current.style.display = `block`;
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
            if (location.pathname === `/dashboard`) {
              return logout({
                logoutParams: { returnTo: window.location.origin },
              });
            }
            return loginWithRedirect();
          }}
          className={
            location.pathname === `/dashboard`
              ? `btn`
              : `animate__animated animate__heartBeat animate__infinite btn`
          }
        >
          {location.pathname === `/dashboard` ? `LOGOUT` : `LOGIN`}
        </button>
        <button
          onClick={() => loginWithRedirect()}
          className={
            location.pathname === `/dashboard`
              ? `btn`
              : `animate__animated animate__heartBeat animate__infinite btn`
          }
          ref={remove}
        >
          {location.pathname === `/dashboard` ? `` : `SIGNUP`}
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
