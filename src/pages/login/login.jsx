export default function login(){
    return (
        <div className="login">
            <div className="container">
                <label htmlFor="">idenfiant:</label>
                <input type="text" />
                <label htmlFor="">Mot de passe:</label>
                <div className="bouttons">
                <button>Rénitialiser mdp</button>
                <button>Connexion</button>
                </div>
            </div>
        </div>
    )
}