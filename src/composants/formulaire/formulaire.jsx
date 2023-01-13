import "./formulaire.css";
function Formulaire({props}) {
  return (
    <div className="container">
        <p className="titre">{props}</p>
      <form className="formulaire">
        <label>
          Nom
          <br />
          <input type="text" name="nom" />
        </label>
        <label>
          Prénom
          <br />
          <input type="text" name="prenom" />
        </label>
        <label>
          Email
          <br />
          <input type="mail" name="email" />
        </label>
        <label>
          Mot de passe
          <br />
          <input type="password" name="mot de passe" />
        </label>
        <label>
          Confirmation du mot de passe
          <br />
          <input type="password" name="mot de passe" />
        </label>
        <br />
        <input className="bouton" type="submit" value="Créer compte" />
      </form>
    </div>
  );
}
export default Formulaire;
