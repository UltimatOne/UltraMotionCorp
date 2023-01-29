import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../button/button";
import dataService from "../services/dataService";
import "./vueService.css";
const VueService = () => {
  const [vueService, setVueService] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dataService.getService(+id).then((data) => setVueService(data));
    }
  }, [id]);
  return (
    <>
      <div className="vueServiceContainer">
        <div className="vueService">
          <h1>{vueService.titre}</h1>
          <p className="description">Description:</p>
          <p>{vueService.description}</p>
          <h2>Tarif: {vueService.tarif}€ HT</h2>
        </div>
        <div className="boutonVueServiceContainer">
          <Button
            className={"boutonVueService"}
            children={"Ajouter au panier"}
          />
        </div>
      </div>
    </>
  );
};

export default VueService;