import FacebookIcon from "../../assets/icons/Homelands_FacebookIcon.svg";
import TwitterIcon from "../../assets/icons/Homelands_TwitterIcon.svg";
import FooterLogo from "../../assets/icons/Homelands_SmallLogo.svg";

import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <section>
        <img id="FooterLogo" src={FooterLogo} alt="Homelands_Logo" />
        <ul>
          <li>Øster Uttrupvej 5</li>
          <li>9000 Aalborg</li>
        </ul>
        <ul>
          <li>
            <a href="mailto:info@homelands.dk">Email: info@homelands.dk</a>
          </li>
          <li>Telefon: +45 1122 3344</li>
        </ul>
      </section>
      <nav>
        <a href="#" target="_blank">
          <img src={TwitterIcon} alt="Twitter_Icon" />
        </a>
        <a href="#" target="_blank">
          <img src={FacebookIcon} alt="Facebook_Icon" />
        </a>
      </nav>
    </footer>
  );
};
