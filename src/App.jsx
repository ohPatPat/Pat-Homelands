import "./App.scss";
import { Footer } from "./comp/footer/Footer.jsx";
import { Header } from "./comp/header/Header.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import { NotFound } from "./page/NotFound.jsx";
import { useAuth } from "./page/login/Auth.js";
import { Forside } from "./page/Forside.jsx";
import { Login } from "./page/login/Login.jsx";
import { Profile } from "./page/Profile.jsx";
import { NavBarLeft } from "./comp/NavBarLeft";

import { ProduktListe } from "./page/products/ProduktListe.jsx";
import { ProduktDetaljer } from "./page/products/ProduktDetaljer.jsx";
import { Produkter } from "./page/products/Produkter.jsx";

const Redirect = ({ to }) => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
};

function App() {
  const { loginData } = useAuth(Login);

  return (
    <>
      <Router>
        <Header></Header>
        <NavBarLeft></NavBarLeft>
        <Routes>
          {/* Start "route" */}
          <Route index element={<Forside title={"Forside"} />} />

          {/* Normal "routes" */}
          <Route path="/Login" element={<Login title={"Login"} />} />
          <Route path="/products">
            <Route index element={<Produkter title={"Produkter"} />}></Route>
            <Route path=":group_id">
              <Route
                index
                element={<ProduktListe title={"ProduktListe"} />}
              ></Route>
              <Route
                path=":product_id"
                element={<ProduktDetaljer Detaljer title={"ProduktDetaljer"} />}
              ></Route>

              {/* "Route" for not pages that cant be found */}
              <Route path="*" element={<NotFound title={"Siden Findes ikke"} />} />
            </Route>
          </Route>
        </Routes>
      </Router>

      <Footer></Footer>
    </>
  );
}

export default App;
