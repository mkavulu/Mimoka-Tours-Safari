// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: Brand Info & Newsletter */}
        <div className="footer-col">
          <h3>Mimoka<span>Tours</span></h3>
          <p>Your premier partner for unforgettable luxury and wildlife safaris across East and Southern Africa.</p>
          
          {/* Newsletter Form */}
          <div className="footer-newsletter">
            <h4>Stay Inspired</h4>
            <form onSubmit={(e) => e.preventDefault()} className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Safari Packages</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Destinations */}
        <div className="footer-col">
          <h4>Destinations</h4>
          <ul>
            <li><Link to="/destinations">Kenya & Tanzania</Link></li>
            <li><Link to="/destinations">Uganda & Rwanda (Gorillas)</Link></li>
            <li><Link to="/destinations">South Africa & Botswana</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact & Socials */}
        <div className="footer-col">
          <h4>Get in Touch</h4>
          <p>Email: info@mimokatours.com</p>
          <p>Phone: +254 710 165 356</p>
          <p>Nairobi, Kenya</p>

          {/* Social Media Links */}
          <div className="footer-socials" style={{ marginTop: '15px' }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ margin: '0 10px' }}>Facebook</a>
            <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor">TripAdvisor</a>
          </div>
        </div>

      </div>

      {/* Footer Bottom with Copyright & Trust Elements */}
      <div className="footer-bottom">
        <p>&copy; 2026 Mimokatours and Safaris. All Rights Reserved.</p>
        <p className="footer-trust-text" style={{ fontSize: '0.85rem', color: '#aaa', marginTop: '5px' }}>
    trusted by travelers worldwide for authentic safari experiences. Our commitment to excellence ensures unforgettable journeys across Africa's most iconic landscapes.
        </p>
      </div>
    </footer>
  );
}