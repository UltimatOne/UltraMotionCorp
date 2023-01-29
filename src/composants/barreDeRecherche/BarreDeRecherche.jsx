import React from "react";
import "./BarreDeRecherche.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import DataService from "../services/dataService";
import TitreService from "../titreService/TitreService";

const BarreDeRecherche = ({ placeholder }) => {
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    DataService.getServices().then((data) => setDatas(data));},[])

  const handleSearchTerm = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  return (
    <>
      <div className="recherche">
        <div className="rechercheContainer">
          <div className="inputRecherche">
            <input
              type="text"
              placeholder={placeholder}
              onChange={handleSearchTerm}
              className="rechercheInput"
            />
            <div className="iconRecherche">
              <SearchIcon />
            </div>
          </div>
          {searchTerm.length !== 0 && (
            <div className="resultats_recherche">
              {datas
                .filter((datasFiltered) => {
                  return datasFiltered.titre.includes(searchTerm);
                })
                .map((datasFiltered) => (
                    <TitreService key={datasFiltered.id} service={datasFiltered}/>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BarreDeRecherche;