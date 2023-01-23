import React from "react";
import "./BarreDeRecherche.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";

const BarreDeRecherche = ({ placeholder }) => {
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    fetch("http://localhost:8000/services")
      .then((response) => response.json())
      .then((json) => setDatas(json));
  }, []);

  const handleSearchTerm = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    setSearchTerm(value)
  };
  console.log();
  
  return (
    <>
      <div className="recherche">
        <div className="rechercheContainer">
          <div className="inputRecherche">
            <input type="text" placeholder={placeholder} onChange={handleSearchTerm}/>
            <div className="iconRecherche">
              <SearchIcon/>
            </div>
          </div>
          {searchTerm.length !== 0 && (
          <div className="resultats_recherche">
            {datas.filter((datasFiltered)=> {
              return datasFiltered.titre.includes(searchTerm)
            }).map((datasFiltered, key) => {
              return (
                <a className="serviceItem" href="">
                  <p key={datasFiltered.id}>{datasFiltered.titre}</p>
                </a>
              );
            })}
          </div>
          )};
        </div>
      </div>
    </>
  );
};

export default BarreDeRecherche;
