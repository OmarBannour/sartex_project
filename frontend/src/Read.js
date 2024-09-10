import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import './Read.css'; // Import the CSS file

function Read() {
  const { ID } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/User/${ID}`);
        if (res.data.length > 0) {
          setUser(res.data[0]);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.log("Error fetching user details:", err);
        setUser(null);
      }
    };

    fetchUser();
  }, [ID]);

  if (user === null) {
    return <div>No user found or loading error</div>;
  }

  return (
    <div className="read-container">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">User Details</h2>
          <p className="card-text">
            <strong>Nom:</strong> {user.Nom}
          </p>
          <p className="card-text">
            <strong>Matricule:</strong> {user.Matricule}
          </p>
          <Link to="/users" className="btn btn-primary mt-3">
            Back to User List
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Read;
