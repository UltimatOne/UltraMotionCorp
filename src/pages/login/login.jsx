import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="champs">
          <label htmlFor="">idenfiant:</label>
          <input type="text" />
          <label htmlFor="">Mot de passe:</label>
          <input type="text" />
        </div>
        <div className="bouttons">
          <button className="btn-reset">Rénitialiser mdp</button>
          <button className="btn-connexion">Connexion</button>
        </div>
      </div>
    </div>
  );
}
