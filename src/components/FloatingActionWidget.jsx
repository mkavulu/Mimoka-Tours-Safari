// src/components/FloatingActionWidget.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FloatingActionWidget.css';

export default function FloatingActionWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const handleQuoteClick = () => {
    setIsOpen(false);
    navigate('/contact');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/254710165356', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+254710165356';
  };

  return (
    <div className={`floating-widget-container ${isOpen ? 'open' : ''}`}>
      {/* Expanded Options List */}
      <div className="widget-options">
        <div className="widget-item" onClick={handleQuoteClick}>
          <span className="widget-label">Request Quote Form</span>
          <button className="widget-btn quote-btn" title="Request Quote Form">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </button>
        </div>

        <div className="widget-item" onClick={handleWhatsApp}>
          <span className="widget-label">Whatsapp</span>
          <button className="widget-btn whatsapp-btn" title="Chat on WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </button>
        </div>

        <div className="widget-item" onClick={handleCall}>
          <span className="widget-label">Call Us</span>
          <button className="widget-btn call-btn" title="Call Us">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </button>
        </div>
      </div>

      {/* Main Trigger / Close Button */}
      <button className="widget-toggle-btn" onClick={toggleWidget} aria-label="Toggle Contact Menu">
        {isOpen ? (
          <span className="close-icon">✕</span>
        ) : (
          <div className="chat-bubble-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <span className="request-badge-text">Request A Quote</span>
          </div>
        )}
      </button>
    </div>
  );
}