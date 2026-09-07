// src/pages/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destinations: 'Kenya & Tanzania',
    travelDate: '',
    duration: '',
    travelers: '2',
    accommodation: 'Mid-range',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your safari quote request has been submitted. Our team will get back to you shortly.');
    // Add your backend submission logic or EmailJS integration here
  };

  return (
    <div className="contact-page">
      <header className="page-header">
        <h1>Request a Safari Quote</h1>
        <p>Fill out the form below to design your custom African adventure with our specialists</p>
      </header>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input 
                type="text" 
                name="fullName"
                placeholder="Michael Smith" 
                value={formData.fullName}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input 
                type="email" 
                name="email"
                placeholder="john@example.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number / WhatsApp</label>
              <input 
                type="tel" 
                name="phone"
                placeholder="+254 700 000000" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Interested Destination *</label>
              <select name="destinations" value={formData.destinations} onChange={handleChange}>
                <option value="Kenya & Tanzania">Kenya & Tanzania Migration Safari</option>
                <option value="Kenya Safari">Kenya Classic Safari</option>
                <option value="Tanzania Safari">Tanzania Northern Circuit</option>
                <option value="Uganda Primate">Uganda Gorillas & Wildlife</option>
                <option value="Rwanda Gorilla">Rwanda Gorilla Trekking</option>
                <option value="Multi-Country">Multi-Country Grand Tour</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Estimated Travel Date</label>
              <input 
                type="date" 
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Duration (Number of Days)</label>
              <input 
                type="number" 
                name="duration"
                placeholder="e.g., 7 Days" 
                value={formData.duration}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Number of Travelers</label>
              <input 
                type="number" 
                name="travelers"
                placeholder="2" 
                min="1"
                value={formData.travelers}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Accommodation Preference</label>
              <select name="accommodation" value={formData.accommodation} onChange={handleChange}>
                <option value="Budget">Budget / Public Camping</option>
                <option value="Mid-range">Mid-range Lodges & Tented Camps</option>
                <option value="Luxury">Luxury Safari Lodges</option>
                <option value="Ultra-Luxury">Ultra-Luxury Exclusive</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Your Message / Specific Requirements</label>
            <textarea 
              name="message"
              rows="5" 
              placeholder="Tell us about any specific parks you want to visit, dietary requirements, or budget preferences..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">Submit Quote Request</button>
        </form>
      </div>
    </div>
  );
}