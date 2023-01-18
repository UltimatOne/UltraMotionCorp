import React from 'react';
import ScrollButton from 'react-scroll-button';


 {/**
       * Ici je crée le bouton scrolling "suite"
  npm i react-scroll-button        */}
      
        

const ScrollComponent = () => {
  return (
    <ScrollButton
      behavior="smooth"
      iconType="arrowDown"
      style={{ fontSize: '24px' }}
    />
  );
};

export default ScrollButton;