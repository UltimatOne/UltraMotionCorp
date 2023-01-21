import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./formulaire.css";

function Formulaire({ props }) {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [motdepasse, setMotDePasse] = useState("");
  const [validation, validationChangement] = useState(false);
  const navigation = useNavigate();
  const soumettre = (e) => {
    e.preventDefault();
    const clientdata = { prenom, nom, email, motdepasse };
    fetch("http://localhost:8000/clients", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(clientdata),
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
      <div className="container">
        <p className="titre">{props}</p>
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
            {nom.length === 0 && validation && (
              <span className="message">Entrez votre nom</span>
            )}
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
            {prenom.length === 0 && validation && (
              <span className="message">Entrez votre prénom</span>
            )}
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
            {email.length === 0 && validation && (
              <span className="message">Entrez votre email</span>
            )}
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
            {motdepasse.length === 0 && validation && (
              <span className="message">Entrez un mot de passe</span>
            )}
          </div>
          <div className="sectioncontainer">
            <label className="titreLabel">Confirmation du mot de passe</label>
            <input type="password" name="motDePasse" />
            {motdepasse.length === 0 && validation && (
              <span className="message">Entrez un mot de passe</span>
            )}
          </div>
          <button className="bouton" type="submit" value="">
            Créer compte
          </button>
        </form>
      </div>
    </div>
  );
}
export default Formulaire;
