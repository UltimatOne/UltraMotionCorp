import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VueEntrepriseLight from "./vueEntrepriseLight"
import dataService from "../services/dataService";

const VueEntrepriseLightId = () => {
  const [serviceEntrepriseId, setServiceEntrepriseId] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dataService.getService(+id).then((data) => setServiceEntrepriseId(data));
    }
  }, [id]);
  return <VueEntrepriseLight id={serviceEntrepriseId.entrepriseId}/>;
  
};

export default VueEntrepriseLightId;
