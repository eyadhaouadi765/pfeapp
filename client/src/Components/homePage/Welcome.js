import React from "react";
import img from "./assets/welcome.jpeg";
import "./welcome.css"; // Import CSS file for styling

const Welcome = () => {
  return (
    <>
      <div className="card-container">
        <div className="welcome-box">
          <h1>Bienvenue</h1>
          <h4>Découvrez l'ensemble de notre offre de formations destinées aux fonctionnaires de CNI </h4>
        </div>
        <img src={img} alt="Welcome" className="welcome-image" />
      </div>
    </>
  );
};

export default Welcome;
