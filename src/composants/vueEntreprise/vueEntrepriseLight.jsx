import React, { useEffect, useState } from 'react';
import "./vueEntrepriseLight.css"
// import logo from "./../../medias/images/logoElectrite.png"
import Button from '../button/button';
import dataService from '../services/dataService';

const VueEntrepriseLight = ({id}) => {
    const [vueEntrepriseLight, setVueEntrepriseLight] = useState([])
    useEffect(() => {
        if (id) {
          dataService.getEntreprise(+id).then((data) => setVueEntrepriseLight(data));
        }
      }, [id]);
    return (
        <>
        <div className='vueEntrepriseLightContainer'>
            <div  className="logoVueEntrepriseLight" >
            <img src={vueEntrepriseLight.logo} alt="logo de la société"/>
            </div>
            <h1>{vueEntrepriseLight.societe}</h1>
            <h6>{vueEntrepriseLight.activite}</h6>
            <p>{vueEntrepriseLight.description}</p>
            <Button className="boutonVueEntrepriseLight"children="..."/>
        </div>
        </>
    );
};

export default VueEntrepriseLight;