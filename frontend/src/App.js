import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import User from "./User";
import CreateUser from "./CreatUser"; // Fixed import name
import UpdateUser from "./Update";
import Read from "./Read";
import Admin from "./Admin";
import CountPage from "./Rendment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/admin" />} /> {/* Redirect to Admin */}
          <Route path="/admin" element={<Admin />} /> {/* Admin page as the first page */}
          <Route path="/users" element={<User />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/rendement" element={<CountPage />} />
          <Route path="/Update/:ID" element={<UpdateUser />} />
          <Route path="/user/:ID" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
