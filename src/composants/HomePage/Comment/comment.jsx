import React from "react";
import "./comment.css";
import logoRecherchez from "./../../../medias/images/logoRecherchez.svg";
import logoChoisissez from "./../../../medias/images/logoChoisissez.svg";
import logoReservez from "./../../../medias/images/logoReservez.svg";
import logoTermine from "./../../../medias/images/logoTermine.svg";

const Comment = () => {
  return (
    <div className="CommentFonctionne">
      <div className="titre">
        <h1> Comment ça fonctionne ?</h1>
      </div>
      <div className="content">
        <div className="Recherchez">
          <h1>1</h1>
          <h3>Recherchez</h3>
          <img src={logoRecherchez} alt="logoRecherchez" />
        </div>

        <div className="Choisissez">
          <h1>2</h1>
          <h3>Choisissez votre prestataire</h3>
          <img src={logoChoisissez} alt="logoChoisissez" />
        </div>

        <div className="Reservez">
          <h1>3</h1>
          <h3>Réservez et payez</h3>
          <img src={logoReservez} alt="logoReservez" />
        </div>

        <div className="Termine">
          <h1>4</h1>
          <h3>Vos travaux sont terminés !</h3>
          <img src={logoTermine} alt="logoTermine" />
        </div>
      </div>
    </div>
  );
};

export default Comment;
