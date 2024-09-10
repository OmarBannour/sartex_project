import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateUser.css"; // Import the CSS file

function CreateUser() {
  const [Nom, setNom] = useState("");
  const [Matricule, setMatricule] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/create", { Nom, Matricule })
      .then((res) => {
        console.log(res);
        navigate("/users");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="create-user-container">
      <div className="create-user-form">
        <form onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              placeholder="Enter votre nom"
              className="form-control"
              value={Nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="matricule">Matricule</label>
            <input
              type="text"
              placeholder="Entrer votre matricule"
              className="form-control"
              value={Matricule}
              onChange={(e) => setMatricule(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
