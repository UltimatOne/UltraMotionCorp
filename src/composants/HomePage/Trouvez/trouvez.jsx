import React from "react";
import "./trouvez.css";
import logoTrouvez1 from "./../../../medias/images/logoTrouvez1.svg";
import logoTrouvez2 from "./../../../medias/images/logoTrouvez2.svg";
import logoTrouvez3 from "./../../../medias/images/logoTrouvez3.svg";
import logoTrouvez4 from "./../../../medias/images/logoTrouvez4.svg";
const Trouvez = () => {
  return (
    <div className="Trouvez">
      <div className="titre">
        <h1> Trouvez le bon artisan ou la bonne entreprise</h1>
        <h1> parmi nos professionnels</h1>
      </div>

      <div className="content">
        <div className="Trouvez1">
          <img src={logoTrouvez1} alt="logoTrouvez1" />
          <h3>Profitez d'offre de</h3>
          <h3>menuiserie abordables</h3>
          <h3>et sur-mesure</h3>
        </div>

        <div className="Trouvez2">
          <img src={logoTrouvez2} alt="logoTrouvez2" />
          <h3>Offres abordables</h3>
          <h3>et demandes de</h3>
          <h3>devis gratuits</h3>
        </div>

        <div className="Trouvez3">
          <img src={logoTrouvez3} alt="logoTrouvez3" />
          <h3>Faites appel à</h3>
          <h3>des prestataires</h3>
          <h3>de qualité pour réparer</h3>
          <h3>vos équipements</h3>
        </div>

        <div className="Trouvez4">
          <img src={logoTrouvez4} alt="logoTrouvez4" />
          <h3>Ultra Motion Corp</h3>
          <h3>vous accompagne</h3>
          <h3>pour vos travaux</h3>
        </div>
      </div>
    </div>
  );
};

export default Trouvez;
