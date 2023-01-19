import React from "react";

const Comment = () => {
  return (
    <div className="CommentFonctionne">
      <h1> Comment ça fonctionne ?</h1>

      <div className="Recherchez">
        <h1>1</h1>
        <h3>Recherchez</h3>
        <img src="./images/logoRecherchez.svg" alt="logoRecherchez" />
      </div>

      <div className="Choisissez">
        <h1>2</h1>
        <h3>Choisissez votre prestataire</h3>
        <img src="./images/logoChoisissez.svg" alt="logoChoisissez" />
      </div>

      <div className="Reservez">
        <h1>3</h1>
        <h3>Réservez et payez</h3>
        <img src="./images/logoReservez.svg" alt="logoReservez" />
      </div>

      <div className="Termine">
        <h1>4</h1>
        <h3>Vos travaux sont terminés !</h3>
        <img src="./images/logoTermine.svg" alt="logoTermine" />
      </div>
    </div>
  );
};

export default Comment;
