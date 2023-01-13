import React from "react";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Nav() {


  const [toggleMenu, setToggleMenu] = useState(false);
  
  const handleClick = () => {
    console.log(toggleMenu);
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };
  

  return (
    <div>
      <button className="nav_burger" onClick={handleClick}>
        {/* <i class="bi bi-list"></i> */}
      
      </button>
      <img
        src=""
        className="nav_logo"
        alt="Logo"
        width="20%"
      />
      <nav className="nav_links">
        <a href="/" className="nav__link">
          <button>
          Menu
          </button>
        </a>

        <a href="/" className="nav__link">
          <button>
          S'inscrire
          </button>
        </a>

        <a href="/" className="nav__link">
         Se connecter
        </a>
      </nav>
      
    </div>
  );
}

export default Nav;
