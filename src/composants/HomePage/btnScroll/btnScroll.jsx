import React from 'react';
import ScrollButton from 'react-scroll-button';
import btnScroll from "./../../../medias/images/btnScroll.svg"


 /**
       * Ici je crée le bouton scrolling "suite"
  npm i react-scroll-button        */
      
        

const ScrollComponent = () => {
  return (
    <ScrollButton
      behavior="smooth"
      img src={btnScroll} alt="btnScroll"
      style={{ fontSize: '24px', color: "white" }}

    />
  );
};

export default ScrollComponent;