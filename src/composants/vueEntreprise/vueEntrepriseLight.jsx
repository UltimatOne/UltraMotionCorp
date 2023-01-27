import React from 'react';
import "./vueEntrepriseLight.css"
import logo from "./../../medias/images/logoElectrite.png"
import Button from '../button/button';

const VueEntrepriseLight = () => {
    const id = 1;
    const societe = "Elec-Instal"
    const activite = "Electricité"
    const description = "Forte de 30 années d'expériences Elec-Instal est le choix idéal pour vos travaux d'installations électrique."
    return (
        <>
        <div className='vueEntrepriseLightContainer' key={id}>
            <div  className="logoVueEntrepriseLight" >
            <img src={logo} alt="logo de la société"/>
            </div>
            <h1>{societe}</h1>
            <h6>{activite}</h6>
            <p>{description}</p>
            <Button className="boutonVueEntrepriseLight"children="..."/>
        </div>
        </>
    );
};

export default VueEntrepriseLight;