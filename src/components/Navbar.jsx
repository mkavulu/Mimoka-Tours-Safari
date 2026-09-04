// src/components/Navbar.jsx
//import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">Mimoka<span>Tours</span></Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact" className="nav-cta">Book Safari</Link></li>
      </ul>
    </nav>
  );
}