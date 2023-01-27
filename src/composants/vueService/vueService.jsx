import React from "react";
import Button from "../button/button";
import "./vueService.css";
const VueService = () => {
    const titre = "Câblage d’armoire électrique";
    const description =
      "Devis pour l'installation et le câblage d'une armoire électrique.";
    const tarif = 100;
  return (
    <>
      <div className="vueServiceContainer">
        <div className="vueService">
          <h1>{titre}</h1>
          <p className="description">Description:</p>
          <p>{description}</p>
          <h2>Tarif: {tarif}€ HT</h2>
        </div>
        <div className="boutonVueServiceContainer">
          {/* <Button
            className={"boutonVueService"}
            children={"Ajouter au panier"}
          /> */}
        </div>
      </div>
    </>
  );
};

export default VueService;
