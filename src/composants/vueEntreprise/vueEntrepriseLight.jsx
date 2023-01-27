import React from 'react';
import "./vueEntrepriseLight.css"
import logo from "./../../medias/images/logoElectrite.png"
import Button from '../button/button';

const VueEntrepriseLight = () => {
    const id = 1;
    const societe = "Elec-Instal"
    const activite = "Electricité"
    const description = "Forte de 30 années d'expériences Elec-Instal est le choix idéal pour vos traveaux d'installations électrique."
    return (
        <>
        <div className='vueEntrepriseLightContainer' key={id}>
            <h1>Société</h1>
            <div  className="logoVueEntrepriseLight" >
            <img src={logo} alt="logo de la société"/>
            </div>
            <h3>{societe}</h3>
            <h6>{activite}</h6>
            <p>{description}</p>
            {/* <Button className="boutonVueEntrepriseLight"children="..."/> */}
        </div>
        </>
    );
};

export default VueEntrepriseLight;