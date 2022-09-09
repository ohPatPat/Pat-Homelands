import { NavLink } from "react-router-dom";
import { Login } from "../../page/login/Login.jsx";
import { useAuth } from "../../page/login/Auth.js";
import { Search } from "../search/Search.jsx";
import { Navbar } from "../navbar/Navbar.jsx";
import HeaderLogo from "../../assets/icons/Homelands_Logo.svg";
import HeaderBackground from "../../assets/icons/Homelands_Header.svg";

export const Header = () => {
  const { loginData } = useAuth(Login);

  return (
    <header>
      <img
        id="HeaderBackground"
        src={HeaderBackground}
        alt="Header_Background"
      />
      <NavLink to="/">
        <img id="HeaderLogo" src={HeaderLogo} alt="Homelands_Logo" />
      </NavLink>
      <div>
      <nav id="MainNav">
        <NavLink to="/">Forside</NavLink>
        <NavLink to="/Produkter">Boliger til salg</NavLink>

        <NavLink to="/Login">
          {loginData.access_token ? "Log ud" : "Login"}
        </NavLink>
      </nav>

      <Search></Search>
      </div>
      <Navbar></Navbar>
    </header>
  );
};
