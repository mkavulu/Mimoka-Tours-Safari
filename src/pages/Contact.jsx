// src/pages/Contact.jsx
//import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <header className="page-header">
        <h1>Plan Your Safari</h1>
        <p>Speak with our African travel specialists today</p>
      </header>
      <div className="contact-container">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Micheal Smith" required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label>Interested Destination</label>
            <select>
              <option>East Africa (Kenya/Tanzania)</option>
              <option>Southern Africa (South Africa/Botswana)</option>
              <option>Gorilla Trekking (Uganda/Rwanda)</option>
            </select>
          </div>
          <div className="form-group">
            <label>Your Message / Requirements</label>
            <textarea rows="5" placeholder="Tell us about your dates, budget, and group size..."></textarea>
          </div>
          <button type="submit" className="btn-submit">Send Inquiry</button>
        </form>
      </div>
    </div>
  );
}