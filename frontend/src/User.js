// src/User.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./User.css";

function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (ID) => {
    try {
      await axios.delete("http://localhost:8081/User/" + ID);
      setUser(user.filter((item) => item.ID !== ID));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="app-container">
      <div className="table-container">
        <Link to="/create" className="btn btn-success mb-3">
          Add+
        </Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Matricule</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((data, i) => (
              <tr key={i}>
                <td>{data.Nom}</td>
                <td>{data.Matricule}</td>
                <td>
                  <div className="btn-group">
                    <Link
                      to={`/Update/${data.ID}`}
                      className="btn btn-primary btn-sm"
                    >
                      Update
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(data.ID)}
                    >
                      Delete
                    </button>
                    <Link
                      to={`/user/${data.ID}`}
                      className="btn btn-info btn-sm"
                    >
                      Read
                    </Link>
                    <Link
                      to={"/rendement"}
                      className="btn btn-info btn-sm"
                    >
                      Rendment
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
