import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.css";

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();


  const usenavigate = useNavigate();


  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:8000/clients/" + username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          //console.log(resp)
          if (Object.keys(resp).length === 0) {
            toast.error("Veuillez entrer un identifiant valide");
            
          } else {
            if (resp.motdepasse === password) {
              
              
              sessionStorage.setItem("username", username);
              usenavigate("/");
            } else {
              toast.error("veuillez entrer un identifiant/mot de passe valide");
              
            }
          }
        })
        .catch((err) => {
          toast.error("échec de la connexion :" + err.message);
          
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
        result = false;
        toast.warning('veuillez entrer un identifiant valide');
        
    }
    if (password === '' || password === null) {
        result = false;
        toast.warning('veuillez entrer un mot de passe');
       
    }
    return result;
}



  return (
    <div className="login">
      <div className="container">
        <form onSubmit={ProceedLogin}>
          <div className="champs">
            <label htmlFor="">Identifiant :</label>
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
            <label htmlFor="">Mot de passe :</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="bouttons">
            <button className="btn-reset">Rénitialiser mdp</button>
            <button className="btn-connexion" type="submit">
              Connexion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
