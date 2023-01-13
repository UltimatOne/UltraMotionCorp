import React from "react";
import "./Nav.css";
import { useState } from "react";
/* import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom'; */

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    console.log(toggleMenu);
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };

  return (
    <div className="banner">
      <button className="nav_burger" onClick={handleClick}>
        {/* <i class="bi bi-list"></i> */}
      </button>
      <div>
        <img src=".src/img/logoExemple.jpg" alt="LogoUMC" />
      </div>
      <span>
        <nav className="nav_links">
          <a href="/" className="nav__link">
            <button className="btnInscription">S'inscrire</button>
          </a>

          <a href="/" className="nav__link">
            <button className="btnConnection">Se connecter</button>
          </a>
        </nav>
      </span>
    </div>
  );
}

export default Nav;
