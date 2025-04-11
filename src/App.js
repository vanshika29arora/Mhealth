import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Perma from './Components/Perma';
import Ourimpact from './Components/Ourimpact';
import Journey from './Components/Journey';
import Aesthetic from './Components/Aesthetic';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perma" element={<Perma />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/ourimpact" element={<Ourimpact />} />
        <Route path="/aesthetic" element={<Aesthetic />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
