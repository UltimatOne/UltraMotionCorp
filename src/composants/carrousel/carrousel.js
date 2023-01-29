import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./carrousel.css";
import { useParams } from "react-router-dom";
import dataService from "../services/dataService";

const Carrousel = () => {
  const [serviceImage, setServiceImage] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dataService.getService(+id).then((data) => setServiceImage(data));
    }
  }, [id]);

  return (
    <Carousel className="carrousel" autoPlay="true" infiniteLoop="true" interval={4000}>
      <div>
        <img src={serviceImage.image1} alt="image1"></img>
      </div>
      <div>
      <img src={serviceImage.image2} alt="image2"></img>
      </div>
      <div>
      <img src={serviceImage.image3} alt="image3"></img>
      </div>
    </Carousel>
  );
};

export default Carrousel;
