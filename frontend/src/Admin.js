import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Admin.css";

function Admin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (name === "admin" && password === "admin") {
      navigate("/");
    } else {
      setError("Invalid name or password");
    }
  };

  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <div className="inputbox">
              <ion-icon name="person-outline"></ion-icon>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Nom</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Mot de passe</label>
            </div>
            {error && <p className="error">{error}</p>}
            <Link to={"/users"} type="submit" className="btn btn-primary">
              Log in
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Admin;
