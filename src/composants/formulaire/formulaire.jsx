import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      <div className="container">
        <p className="titre">
          <svg
            width="38"
            height="37"
            viewBox="0 0 76 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_3_295)">
              <path
                d="M37.9998 58.0003C29.6665 58.0003 22.2998 53.7337 17.9998 47.3337C18.0998 40.667 31.3332 37.0003 37.9998 37.0003C44.6665 37.0003 57.8998 40.667 57.9998 47.3337C55.7961 50.615 52.8194 53.3042 49.3317 55.1643C45.844 57.0243 41.9525 57.9983 37.9998 58.0003ZM37.9998 10.667C40.652 10.667 43.1955 11.7206 45.0709 13.5959C46.9463 15.4713 47.9998 18.0148 47.9998 20.667C47.9998 23.3192 46.9463 25.8627 45.0709 27.7381C43.1955 29.6134 40.652 30.667 37.9998 30.667C35.3477 30.667 32.8041 29.6134 30.9288 27.7381C29.0534 25.8627 27.9998 23.3192 27.9998 20.667C27.9998 18.0148 29.0534 15.4713 30.9288 13.5959C32.8041 11.7206 35.3477 10.667 37.9998 10.667ZM37.9998 0.666992C33.6224 0.666992 29.2879 1.52918 25.2437 3.20434C21.1995 4.8795 17.5249 7.33481 14.4296 10.4301C8.1784 16.6813 4.6665 25.1598 4.6665 34.0003C4.6665 42.8409 8.1784 51.3193 14.4296 57.5705C17.5249 60.6658 21.1995 63.1212 25.2437 64.7963C29.2879 66.4715 33.6224 67.3337 37.9998 67.3337C46.8404 67.3337 55.3188 63.8218 61.5701 57.5705C67.8213 51.3193 71.3332 42.8409 71.3332 34.0003C71.3332 15.567 56.3332 0.666992 37.9998 0.666992Z"
                fill="#87DA60"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_3_295"
                x="0.666504"
                y="0.666992"
                width="74.6665"
                height="74.667"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_3_295"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_3_295"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          {props}
        </p>
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
