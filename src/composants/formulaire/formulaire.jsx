import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../medias/images/logoUMC.svg";
import logoUtilisateur from "../../medias/images/logoUtilisateur.svg";
import Button from "../button/button";
import "./formulaire.css";

function Formulaire({ props }) {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [motdepasse, setMotDePasse] = useState("");
  const [validation, validationChangement] = useState(false);
  const navigation = useNavigate();
  const soumettre = (e) => {
    e.preventDefault();
    const utilisateurdata = { prenom, nom, email, motdepasse };
    fetch("http://localhost:8000/utilisateurs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(utilisateurdata),
    })
      .then((res) => {
        alert("Sauvegarde réussie.");
        navigation("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="globalForm">
      <div className="logo">
        <img src={logo} alt="LogoUMC" />
      </div>
      <div className="container">
        <div className="banner">
          <p className="titre">
            <img src={logoUtilisateur} alt="logo-utilisateur" /> {props}
          </p>
        </div>
        <form className="formulaire" onSubmit={soumettre}>
          <div className="sectioncontainer">
            <label className="titreLabel">Nom</label>
            <input
              type="text"
              name="nom"
              required
              minLength={2}
              maxLength={15}
              value={nom}
              onMouseDown={(e) => validationChangement(true)}
              onChange={(e) => setNom(e.target.value)}
              className=""
            />
          </div>
          <div className="sectioncontainer">
            <label className="titreLabel">Prénom</label>
            <input
              type="text"
              name="prenom"
              required
              minLength={2}
              maxLength={15}
              value={prenom}
              onMouseDown={(e) => validationChangement(true)}
              onChange={(e) => setPrenom(e.target.value)}
              className=""
            />
          </div>
          <div className="sectioncontainer">
            <label className="titreLabel">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onMouseDown={(e) => validationChangement(true)}
              onChange={(e) => setEmail(e.target.value)}
              className=""
            />
          </div>
          <div className="sectioncontainer">
            <label className="titreLabel">Mot de passe</label>
            <input
              type="password"
              name="motDePasse"
              value={motdepasse}
              onMouseDown={(e) => validationChangement(true)}
              onChange={(e) => setMotDePasse(e.target.value)}
              className=""
            />
          </div>
          <div className="sectioncontainer">
            <label className="titreLabel">Confirmation du mot de passe</label>
            <input type="password" name="motDePasse" />
          </div>
          <Button className="btnInscription" type="submit">
            Créer compte
          </Button>
        </form>
      </div>
    </div>
  );
}
export default Formulaire;
