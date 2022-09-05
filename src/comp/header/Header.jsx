import { NavLink } from "react-router-dom";
import { Login } from "../../page/login/Login.jsx";
import { useAuth } from "../../page/login/Auth.js";
import { Search } from "../search/Search.jsx";


export const Header = () => {
  const { loginData } = useAuth(Login);

  return (
    <header>
      {/* <Search></Search> */}
      <nav>
        <NavLink to="/">Forside</NavLink>
        <NavLink to="/Produkter">Boliger til salg</NavLink>

        <NavLink to="/Login">
          {loginData.access_token ? "Log ud" : "Login"}
        </NavLink>

      </nav>
    </header >
  );
};
