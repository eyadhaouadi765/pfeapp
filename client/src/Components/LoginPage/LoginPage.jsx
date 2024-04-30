import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    // Ici, vous pouvez ajouter la logique de validation du formulaire et l'appel à l'API de connexion
    if (email === "user@example.com" && password === "password") {
      // Connexion réussie, rediriger vers la page d'accueil ou tableau de bord
      console.log("Connexion réussie");
    } else {
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="form-group">
        <span className="icon-container">
          <IoMdMail className="icon" />
        </span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Adresse Email"
          required
        />
      </div>
      <div className="form-group">
        <span className="icon-container">
          <FaLock className="icon" />
        </span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Mot de passe"
          required
        />
      </div>
      <button onClick={handleLogin} className="btn-login">
        Login
      </button>
      <p className="forgot-password">Forgot Password ?</p>
      <p className="signup-link">
        Don't have an account? <a href="/signup">Signup</a>
      </p>
    </div>
  );
};

export default LoginPage;
