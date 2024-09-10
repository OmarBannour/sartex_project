const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database.");
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const sql = "INSERT INTO user (Nom, Matricule) VALUES (?)";
  const values = [req.body.Nom, req.body.Matricule];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.put("/Update/:ID", (req, res) => {
  const sql = "update user SET Nom =?, Matricule=? where ID =?  ";
  const values = [req.body.Nom, req.body.Matricule];
  const ID = req.params.ID;
  db.query(sql, [...values, ID], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.delete("/User/:ID", (req, res) => {
  const sql = "DELETE FROM user WHERE ID=? ";
  const ID = req.params.ID;
  db.query(sql, [ID], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.get("/User/:ID", (req, res) => {
  const sql = "SELECT * FROM user WHERE ID=?";
  const ID = req.params.ID;
  db.query(sql, [ID], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data); // Return the first match since ID is unique
  });
});

app.listen(8081, () => {
  console.log("Server is running on http://localhost:8081");
});
app.post("/updateRendment", (req, res) => {
  const { ID, Rendment } = req.body; // Assuming ESP8266 sends userID and rendment

  const sql = "UPDATE user SET rendment = ? WHERE ID = ?";
  db.query(sql, [Rendment, ID], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ success: true, data: result });
  });
});
