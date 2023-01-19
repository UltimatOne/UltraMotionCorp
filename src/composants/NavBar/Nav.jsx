import React from "react";
import "./Nav.css";
// import { useState } from "react";
import logo from "../../medias/images/logoUMC.svg";
import Button from "../button/button";
/* import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom'; */

function Nav() {
  return (
    <div className="banner">
      <div className="container">
        <div>
          <img src={logo} alt="LogoUMC" />
        </div>
        <span>
          <nav className="nav_links">
            <a href="/formulaire-utilisateur" className="nav__link">
              <Button className="btnInscription" type="button">
                S'inscrire
              </Button>
            </a>

            <a href="/" className="nav__link">
              <Button className="btnConnexion">Se Connecter</Button>
            </a>
          </nav>
        </span>
      </div>
    </div>
  );
}

export default Nav;
