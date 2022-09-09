import React, { useState } from "react";
import { Squash as Hamburger, Squash } from "hamburger-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../page/login/Auth.js";
import { Login } from "../../page/login/Login.jsx";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!isOpen);
  };

  const { loginData } = useAuth(Login);

  return (
    <>
      <Squash toggled={isOpen} toggle={setOpen} />
      <nav className={isOpen ? "Active" : "notActive"}>
        <ul onClick={handleToggle}>

          <li>
            <NavLink to="/" onClick={handleToggle}>
              Forside
            </NavLink>
          </li>
          <li>
            <NavLink to="/Produkter" onClick={handleToggle}>
              Boliger til salg
            </NavLink>
          </li>
          <li>
            <NavLink to="/Login" onClick={handleToggle}>
              {loginData.access_token ? "Log ud" : "Login"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
