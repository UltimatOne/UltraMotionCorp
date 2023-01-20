//  Imports nécessaires
import React from "react";
import "./Nav.css";
import logo from "../../medias/images/logoUMC.svg";
import Button from "../button/button";


function Nav() {
  return (
    <div className="banner">
      <div className="container">
        {/* Logo svg UMC importé */}
        <div>
          <img src={logo} alt="LogoUMC" />
        </div>
        <span>
          <nav className="nav_links">
              {/* Balise Bouton, props Children= S'inscrire, 
              props ClassName = btnInscription
              props type=button + lien formulaire inscription*/}
            <a href="/formulaire-utilisateur" className="nav__link">
              <Button className="btnInscription" type="button">
                S'inscrire
              </Button>
            </a>

            {/* Balise Bouton, props Children= Se Connecter, 
              props ClassName = btnConnexion
              props type=button*/}
            <a href="/" className="nav__link">
              <Button className="btnConnexion" type="button">Se Connecter</Button>
            </a>
          </nav>
        </span>
      </div>
    </div>
  );
}

export default Nav;
