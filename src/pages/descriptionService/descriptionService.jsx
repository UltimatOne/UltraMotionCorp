import React from "react";
import BarreDeRecherche from "../../composants/barreDeRecherche/BarreDeRecherche";
import Carrousel from "../../composants/carrousel/carrousel";
import Nav from "../../composants/NavBar/Nav";
import VueEntrepriseLight from "../../composants/vueEntreprise/vueEntrepriseLight";
import VueService from "../../composants/vueService/vueService";
import "./descriptionService.css";

const DescriptionService = () => {
  return (
    <div className="descriptionServiceContainer">
      <div className="descriptionService">
        <Nav />
        <Carrousel />
        <VueEntrepriseLight />
      </div>
      <VueService />
    </div>
  );
};

export default DescriptionService;
