import React from "react";
import img from "../homePage/assets/logo.png";

const Contact = () => {
  return (
    <section
      className="contact-section"
      style={{ background: "#f9f9f9", padding: "50px 0" }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Logo à droite */}
        <div
          className="logo-container"
          style={{ flex: "1", textAlign: "right" }}
        >
          <img src={img} alt="Logo" width="200" height="100" />
        </div>
        {/* Informations de contact au centre */}
        <div
          className="contact-info"
          style={{ flex: "3", textAlign: "center" }}
        >
          <h2 style={{ marginBottom: "20px", fontWeight: "bold" }}>
            Nos coordonnées
          </h2>
          <div>
            <p>CNI Formation</p>
            <p>Rue des Pyrénées</p>
            <p>ZI Abos-Tarsacq</p>
            <p>64360 ABOS</p>
            <p>Tél : 05 59 60 71 57</p>
            <p>Mail : formation@defi-informatique.fr</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
