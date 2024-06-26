import { Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Countries from "./routes/Countries";
import Vietnam from "./routes/Vietnam";
import Thailand from "./routes/Thailand";
import Korea from "./routes/Korea";
import 'bootstrap/dist/css/bootstrap.min.css';
import Photos from "./routes/Photos";
function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/vietnam" element={<Vietnam />} />
        <Route path="/thailand" element={<Thailand />} />
        <Route path="/korea" element={<Korea />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>

      
    </div>
  );
}

export default App;
