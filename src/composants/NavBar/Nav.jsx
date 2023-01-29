//  Imports nécessaires

import "./Nav.css";
import logo from "../../medias/images/logoUMC.svg";
import chinchilla from "../../medias/images/chinchilla.jpeg";
import Button from "../button/button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


function Nav() {
  const usenavigate = useNavigate();
  const [customerlist, listupdate] = useState(null);
  const [displayusername, displayusernameupdate] = useState("");

  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      
    } else {
      displayusernameupdate(username);
    }
    // Le tokken pour sauvegarder l'utilisateur dans la session storage
    let jwttoken = sessionStorage.getItem("jwttoken");
    fetch(" http://localhost:8000/clients", {
      headers: {
        Authorization: "bearer " + jwttoken,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        listupdate(resp);
      })
      .catch((err) => {
        toast.error(err)
      });
  }, []);

  /**
   * logout est la fonction qui permet la déconnexion de l'utilisateur en vidant le sessionStorage
   */
  const logout = () => {
    sessionStorage.clear();
    usenavigate('/')
    window.location.reload(false);
  
  }


  return (
    <div className="nav">
      <div className="banner">
        <div className="container">
          {/* Logo svg UMC importé */}
          <div>
            <a className="retourAccueil" href="/">
              <img src={logo} alt="LogoUMC" />
            </a>
          </div>

          {displayusername != "" ? (
            <nav className="nav_login">
              {/* <div> Bienvenue: {displayusername}</div> */}
              <div className="avatar">
              <img src={chinchilla} alt="c'est trop mignon ces bête la ♥" />
              </div>
              <button className="logout" type="button" onClick={logout}>déconnexion</button>
             
              </nav>
          ) : (
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
                  <Button className="btnConnexion" type="button">
                    Se Connecter
                  </Button>
                </Link>
              </nav>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
