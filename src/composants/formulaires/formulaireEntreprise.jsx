import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./formulaireEntreprise.css";
import logo from "../../medias/images/logoUMC.svg";

function FormulaireEntreprise({ props }) {
  const [societe, setSociete] = useState("");
  const [activite, setActivite] = useState("");
  const [adresse, setAdresse] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [ville, setVille] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [motdepasse, setMotDePasse] = useState("");
  const [siret, setSiret] = useState("");
  const [validation, validationChangement] = useState(false);
  const navigation = useNavigate();
  const soumettre = (e) => {
    e.preventDefault();
    const entreprisedata = { societe, activite, adresse, codePostal, ville, email, telephone, motdepasse, siret};
    fetch("http://localhost:8000/entreprises", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(entreprisedata),
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
    <div className="globalFormEntreprise">
      <div className="logo">
        <a className="retourAccueil" href="/">
          <img src={logo} alt="Logo UltraMotionCorp" />
        </a>
      </div>
      <div className="container">
        <p className="titre">
        <svg
            width="58"
            height="57"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M56.6665 53.333C54.8332 53.333 53.3332 51.833 53.3332 49.9997H26.6665C26.6665 51.833 25.1665 53.333 23.3332 53.333C21.4998 53.333 19.9998 51.833 19.9998 49.9997H6.6665V59.9997C6.6665 63.6663 9.6665 66.6663 13.3332 66.6663H66.6665C70.3332 66.6663 73.3332 63.6663 73.3332 59.9997V49.9997H59.9998C59.9998 51.833 58.4998 53.333 56.6665 53.333ZM66.6665 26.6663H56.6665V19.9997C56.6665 16.333 53.6665 13.333 49.9998 13.333H29.9998C26.3332 13.333 23.3332 16.333 23.3332 19.9997V26.6663H13.3332C9.6665 26.6663 6.6665 29.6663 6.6665 33.333V46.6663H19.9998V43.333C19.9998 41.4997 21.4998 39.9997 23.3332 39.9997C25.1665 39.9997 26.6665 41.4997 26.6665 43.333V46.6663H53.3332V43.333C53.3332 41.4997 54.8332 39.9997 56.6665 39.9997C58.4998 39.9997 59.9998 41.4997 59.9998 43.333V46.6663H73.3332V33.333C73.3332 29.6663 70.3332 26.6663 66.6665 26.6663ZM49.9998 26.6663H29.9998V19.9997H49.9998V26.6663Z"
              fill="#FCFF68"
            />
          </svg>
          {props}
        </p>
        <form className="formulaire" onSubmit={soumettre}>
          <div className="sectionContainerSocieteActivite">
            <div className="sectioncontainer">
              <label className="titreLabel">Nom de votre entreprise</label>
              <input
                type="text"
                name="nomSociete"
                required
                minLength={2}
                maxLength={15}
                value={societe}
                onMouseDown={(e) => validationChangement(true)}
                onChange={(e) => setSociete(e.target.value)}
                className="inputSociete"
              />
              <div className="spanMessage">
                {societe.length === 1 && validation && (
                  <span className="message">Entrez le nom de votre entreprise</span>
                )}
              </div>
            </div>
            <div className="sectioncontainer">
              <label className="titreLabel">Activité</label>
              <input
                type="text"
                name="activitie"
                required
                minLength={2}
                maxLength={15}
                value={activite}
                onMouseDown={(e) => validationChangement(true)}
                onChange={(e) => setActivite(e.target.value)}
                className="inputActivite"
              />
              <div className="spanMessage">
                {activite.length === 1 && validation && (
                  <span className="message">Entrez votre activité</span>
                )}
              </div>
            </div>
          </div>
          <div className="sectioncontainer">
            <label className="titreLabel">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onMouseDown={(e) => validationChangement(true)}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="spanMessage">
              {email.length === 2 && validation && (
                <span className="message">Entrez votre email</span>
              )}
            </div>
          </div>
          <div className="sectioncontainer">
            <label className="titreLabel">Téléphone</label>
            <input
              type="Phone"
              name="phone"
              value={telephone}
              onMouseDown={(e) => validationChangement(true)}
              onChange={(e) => setTelephone(e.target.value)}
              className=""
              maxLength="15"
            />
            <div className="spanMessage">
              {telephone.length === 2 && validation && (
                <span className="message">Entrez votre téléphone</span>
              )}
            </div>
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
            <div className="spanMessage">
              {motdepasse.length === 2 && validation && (
                <span className="message">Entrez un mot de passe</span>
              )}
            </div>
          </div>
          <div className="sectioncontainer">
            <label className="titreLabel">Confirmation du mot de passe</label>
            <input type="password" name="motDePasse" />
            <div className="spanMessage">
              {motdepasse.length === 2 && validation && (
                <span className="message">Entrez un mot de passe</span>
              )}
            </div>
          </div>
          <div className="sectioncontainer">
            <label className="titreLabel">Adresse</label>
            <input
              type="text"
              name="adresse"
              value={adresse}
              onMouseDown={(e) => validationChangement(true)}
              onChange={(e) => setAdresse(e.target.value)}
              className=""
            />
            <div className="spanMessage">
              {adresse.length === 2 && validation && (
                <span className="message">Entrez votre adresse</span>
              )}
            </div>
          </div>
          <div className="sectionContainerPostalVille">
            <div className="sectioncontainer">
              <label className="titreLabel">Code postal</label>
              <input
                type="text"
                name="postalCode"
                value={codePostal}
                onMouseDown={(e) => validationChangement(true)}
                onChange={(e) => setCodePostal(e.target.value)}
                className="inputPostal"
              />
              <div className="spanMessage">
                {codePostal.length === 2 && validation && (
                  <span className="message">Entrez votre code postal</span>
                )}
              </div>
            </div>
            <div className="sectioncontainer">
              <label className="titreLabel">Ville</label>
              <input
                type="text"
                name="ville"
                value={ville}
                onMouseDown={(e) => validationChangement(true)}
                onChange={(e) => setVille(e.target.value)}
                className="inputVille"
              />
              <div className="spanMessage">
                {ville.length === 2 && validation && (
                  <span className="message">Entrez votre ville</span>
                )}
              </div>
            </div>
          </div>
          <div className="sectioncontainer">
            <label className="titreLabel">Siret</label>
            <input
              type="text"
              name="siret"
              value={siret}
              onMouseDown={(e) => validationChangement(true)}
              onChange={(e) => setSiret(e.target.value)}
              className=""
            />
            <div className="spanMessage">
              {siret.length === 2 && validation && (
                <span className="message">Le Siret est obligatoire</span>
              )}
            </div>
          </div>
          <button className="bouton" type="submit" value="">
            Créer compte
          </button>
        </form>
      </div>
    </div>
  );
}
export default FormulaireEntreprise;
