// src/UpdateUser.js
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Update.css"; // Import the new CSS file

function UpdateUser() {
  const [Nom, setNom] = useState("");
  const [Matricule, setMatricule] = useState("");
  const { ID } = useParams();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put("http://localhost:8081/Update/" + ID, { Nom, Matricule })
      .then((res) => {
        console.log(res);
        navigate("/users");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="update-container">
      <div className="update-card">
        <form onSubmit={handleSubmit}>
          <h2>Update User</h2>
          <div className="mb-3">
            <label htmlFor="nom">Nom</label>
            <input
              id="nom"
              type="text"
              placeholder="Enter votre nom"
              className="form-control"
              value={Nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="matricule">Matricule</label>
            <input
              id="matricule"
              type="text"
              placeholder="Entrer votre matricule"
              className="form-control"
              value={Matricule}
              onChange={(e) => setMatricule(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;