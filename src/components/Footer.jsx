// src/components/Footer.jsx
//import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>Mimoka<span>Tours</span></h3>
          <p>Your premier partner for unforgettable luxury and wildlife safaris across East and Southern Africa.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Safari Packages</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Destinations</h4>
          <ul>
            <li><Link to="/destinations">Kenya & Tanzania</Link></li>
            <li><Link to="/destinations">Uganda & Rwanda (Gorillas)</Link></li>
            <li><Link to="/destinations">South Africa & Botswana</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Get in Touch</h4>
          <p>Email: info@mimokatours.com</p>
          <p>Phone: +254 700 000 000</p>
          <p>Nairobi, Kenya & Cape Town, South Africa</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Mimokatours and Safaris. All Rights Reserved.</p>
      </div>
    </footer>
  );
}