import logo from "./../../img/icons/logo.svg";

import "./../../styles/common.css";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logo} alt="Logo" />
            <span>Fashion</span>
          </div>
          <nav className="header__nav">
            <ul>
              <li>
                <a href="#!">Catalogue</a>
              </li>
              <li>
                <a href="#!">Fashion</a>
              </li>
              <li>
                <a href="#!">Favorite</a>
              </li>
              <li>
                <a href="#!">Lifestyle</a>
              </li>
              <li>
                <a href="#!" className="header__nav-btn">
                  Sign Up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
