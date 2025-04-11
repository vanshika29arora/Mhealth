import React from 'react';
import '../App.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>SerenityVista</h3>
        <p>Your safe space for healing, hope & growth.</p>
      </div>

      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/story">Stories</a>
        <a href="#">Contact</a>
        <a href="#">Privacy</a>
      </div>

      <div className="footer-bottom">
        <p>© 2023 SerenityVista. All rights reserved.</p>
      </div>
    </footer>
  );
}
