import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataService from "../../composants/services/dataService";
import "./descriptionService.css";
import Carrousel from "../../composants/carrousel/carrousel";
import VueService from "../../composants/vueService/vueService";
import Nav from "../../composants/NavBar/Nav";
import VueEntrepriseLightId from "../../composants/vueEntreprise/vueEntrepriseLightId";

const DescriptionService = () => {
  const [serviceDetail, setServiceDetail] = useState([]);
  const { serviceId } = useParams();
  useEffect(() => {
    if (serviceId) {
      DataService.getService(+serviceId).then((data) => setServiceDetail(data));
    }
  }, [serviceId]);

  return (
    <div className="descriptionServiceContainer">
      <div className="descriptionService">
        <Nav />
        <Carrousel />
        <VueEntrepriseLightId key={serviceDetail}/>
      </div>
      <VueService />
    </div>
  );
};

export default DescriptionService;