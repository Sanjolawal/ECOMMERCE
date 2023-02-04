import "./menus.css";
import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Menus = () => {
  const remove = useRef();
  const { loginWithRedirect, logout } = useAuth0();

  useEffect(() => {
    if (location.pathname === `/dashboard`) {
      remove.current.style.display = `none`;
    }
    return () => {};
  }, []);

  return (
    <div className="menus">
      <NavLink to="/" title="Home">
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
  );
};

export default Menus;
