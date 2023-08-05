import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginas from './loginas/Loginas';
import Loginform from './logIn form/Loginform';



const Routess = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Loginas />} />
      <Route path="/admin-teacher" element={<Loginform />} />
      <Route path="/mentor" element={<Loginform />}/>
      <Route path="/student" element={<Loginform />} />
    </Routes>
  </Router>
);

export default Routess;
