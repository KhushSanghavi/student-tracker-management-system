import React from "react";
import Navbar from "../navbar/Navbar";
import "./Loginas.modules.css";
import { useState } from "react";
import Login from "../logIn form/loginform";

const Loginas = () => {
const [selectedRole, setSelectedRole] = useState(null);

  const handleButtonClick = (role) => {
    setSelectedRole(role);
}
  return (
    <>
      <Navbar />
      <div className="home-container">
        <h2>LogIn As</h2>
        <div className="button-container">
          <button onClick={() => handleButtonClick("Teacher/Admin")}>
            Teacher/Admin
          </button>
          <button onClick={() => handleButtonClick("Mentor")}>Mentor</button>
          <button onClick={() => handleButtonClick("Student")}>Student</button>
        </div>
        {selectedRole && <Login role={selectedRole} />}
      </div>
    </>
  );
};

export default Loginas;
