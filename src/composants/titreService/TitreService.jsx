import React from "react";
import { Link } from "react-router-dom";
import "./titreService.css"

const TitreService = ({service}) => {
  return (
    <Link to={`/services/${service.id}`}>
      <div className="titreService">
        <p>{service.titre}</p>
      </div>
    </Link>
  );
};

export default TitreService;
