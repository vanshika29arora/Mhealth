import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <header className="top-header">
      <div className="logo">
        Serenity<span>Vista</span>
      </div>

      <div className="nav-highlights">
        <div><strong>Inner Peace Found</strong><br /><span>Discover serenity within!</span></div>
        <div><strong>Mindful Living Journey</strong><br /><span>Embrace balance, find calm!</span></div>
        <div><strong>Empower Yourself</strong><br /><span>Foster growth, cultivate peace!</span></div>
        <div><strong>Calm Amidst Chaos</strong><br /><span>Seek tranquility, find stability!</span></div>
        <div><strong>Bliss Unlocked Within</strong><br /><span>Embrace joy, find serenity!</span></div>
      </div>

      <nav className="main-nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/perma">PERMA</Link>
        <Link className="nav-link" to="/journey">Start Your Journey</Link>
        <Link className="nav-link" to="/ourimpact">Our Impact</Link>
        <Link className="nav-link" to="/aesthetic">Aesthetic</Link>
      </nav>
    </header>
  );
};

export default Navbar;
