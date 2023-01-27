//  Imports nécessaires
import React from "react";
import "./Nav.css";
import logo from "../../medias/images/logoUMC.svg";
import Button from "../button/button";
import {Link} from "react-router-dom";


function Nav() {
  return (
    <div className="banner">
      <div className="container">
        {/* Logo svg UMC importé */}
        <div>
          <a className="retourAccueil" href="/"><img src={logo} alt="LogoUMC" /></a>
        </div>
        <span>
          <nav className="nav_links">
              {/* Balise Bouton, props Children= S'inscrire, 
              props ClassName = btnInscription
              props type=button + lien formulaire inscription*/}
            <Link to="/home-signup" className="nav__link">
              <Button className="btnInscription" type="button">
                S'inscrire
              </Button>
            </Link>

            {/* Balise Bouton, props Children= Se Connecter, 
              props ClassName = btnConnexion
              props type=button*/}
            <Link to="/connexion" className="nav__link">
              <Button className="btnConnexion" type="button">Se Connecter</Button>
            </Link>
          </nav>
        </span>
      </div>
    </div>
  );
}

export default Nav;
