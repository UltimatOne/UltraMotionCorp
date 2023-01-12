import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carrousel.css";
import image1 from "./../../medias/images/1.jpg"
import image2 from "./../../medias/images/2.jpg"
import image3 from "./../../medias/images/3.jpg"

const Carrousel = () => {
  return (
    <Carousel className="carrousel" autoPlay="true" infiniteLoop="true">
      <div className="images">
        <img src={image1} alt="image1"></img>
      </div>
      <div className="images">
      <img src={image2} alt="image2"></img>
      </div>
      <div className="images">
      <img src={image3} alt="image3"></img>
      </div>
    </Carousel>
  );
};

export default Carrousel;
