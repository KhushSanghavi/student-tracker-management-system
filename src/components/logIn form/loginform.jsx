import React, { useState } from 'react';
// import { useEffect } from 'react';
import './loginform.modules.css';
import Navbar from '../navbar/Navbar';
// import { Link } from 'react-router-dom';



function Loginform() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle login logic, e.g., send the data to an API for authentication.
    console.log('Username:', username);
    console.log('Password:', password);
    
  };

  return (
    <>
    <Navbar />
    <div className="login">
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  </>
  );
};


export default Loginform;

