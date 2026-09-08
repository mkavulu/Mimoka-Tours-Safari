// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const navigate = useNavigate();

  const handleTourClick = (tourId) => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    navigate(`/tour/${tourId}`);
  };

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    setIsMobileMenuOpen(false);
    // Add your translation/localization logic here
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">Mimoka<span>Tours</span></Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button 
        className="menu-toggle" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation"
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>

      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
        <li><Link to="/destinations" onClick={() => setIsMobileMenuOpen(false)}>Destinations</Link></li>
        <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>

        {/* Tours List Mega-Menu Dropdown */}
        <li 
          className="dropdown-container"
          onMouseEnter={() => window.innerWidth > 992 && setIsDropdownOpen(true)}
          onMouseLeave={() => window.innerWidth > 992 && setIsDropdownOpen(false)}
        >
          <span 
            className="dropdown-trigger" 
            onClick={() => window.innerWidth <= 992 && setIsDropdownOpen(!isDropdownOpen)}
          >
            Tours List ▼
          </span>

          {isDropdownOpen && (
            <div className="mega-menu">
              <div className="mega-menu-column">
                <h4>Kenya | Tanzania Combination</h4>
                <ul>
                  <li onClick={() => handleTourClick(1)}>8 Days Kenya & Tanzania Migration Safari</li>
                  <li onClick={() => handleTourClick(10)}>8 Days Tanzania Migration & Zanzibar</li>
                </ul>
              </div>

              <div className="mega-menu-column">
                <h4>Kenya</h4>
                <ul>
                  <li onClick={() => handleTourClick(5)}>6 Days Classic Kenya Wildlife Safari</li>
                  <li onClick={() => handleTourClick(9)}>9 Days Ultimate Kenya Photographic Safari</li>
                </ul>
              </div>

              <div className="mega-menu-column">
                <h4>Tanzania</h4>
                <ul>
                  <li onClick={() => handleTourClick(6)}>5 Days Tanzania Northern Circuit Express</li>
                </ul>
              </div>

              <div className="mega-menu-column">
                <h4>Uganda & Rwanda</h4>
                <ul>
                  <li onClick={() => handleTourClick(2)}>7 Days Uganda Primate & Wildlife</li>
                  <li onClick={() => handleTourClick(3)}>5 Days Rwanda Gorilla Trekking</li>
                  <li onClick={() => handleTourClick(7)}>4 Days Queen Elizabeth & Bwindi Gorillas</li>
                </ul>
              </div>
            </div>
          )}
        </li>

        <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>

        {/* Inline Language Switcher Buttons (EN, FR, DE) */}
        <li className="lang-switcher-item">
          <div className="lang-switcher">
            <button 
              className={currentLang === 'EN' ? 'lang-btn active' : 'lang-btn'} 
              onClick={() => handleLanguageChange('EN')}
              title="English"
            >
              EN
            </button>
            <span className="lang-divider">|</span>
            <button 
              className={currentLang === 'FR' ? 'lang-btn active' : 'lang-btn'} 
              onClick={() => handleLanguageChange('FR')}
              title="Français"
            >
              FR
            </button>
            <span className="lang-divider">|</span>
            <button 
              className={currentLang === 'DE' ? 'lang-btn active' : 'lang-btn'} 
              onClick={() => handleLanguageChange('DE')}
              title="Deutsch"
            >
              DE
            </button>
          </div>
        </li>

        <li><Link to="/contact" className="nav-cta" onClick={() => setIsMobileMenuOpen(false)}>Book Safari</Link></li>
      </ul>
    </nav>
  );
}