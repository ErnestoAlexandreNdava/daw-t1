import React, { useState } from "react";
import "./LoginPage.css";  

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");  

  const handleLogin = () => {
    if (email === "cliente@email.com" && password === "12345678") {
      onLogin("Cliente");
    } else if (email === "admin@email.com" && password === "12345678") {
      onLogin("Admin");
    } else {
      setErrorMessage("Credenciais inválidas");  
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default LoginPage;
