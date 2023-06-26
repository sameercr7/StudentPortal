import React from "react";
import About from "./About";
import Connect from "./Connect";
import Contact from "./Contact";
import "./css/Kconnect.css";
import Opportunity from "./Opportunity";
import {Routes, Route} from 'react-router-dom'


function Kconnect() {
  return (
    <div className="kconnect">
      <Routes>
          <Route path="/" element={<Connect/> }></Route>
          <Route path="/job" element={<Opportunity/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
    </div>
  );
}

export default Kconnect;