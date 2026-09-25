// src/pages/BookingInquiry.jsx
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SpotlightCard from '../components/SpotlightCard';
import './BookingInquiry.css';

export default function BookingInquiry() {
  const location = useLocation();
  const preSelectedPackage = location.state?.selectedPackage || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    safariType: preSelectedPackage || '8 Days Kenya & Tanzania Migration Safari',
    travelDate: '',
    travelers: '2',
    message: preSelectedPackage ? `I am interested in booking: ${preSelectedPackage}` : ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a6c2285c-4424-40be-b972-bfa6c0c07212", // Replace with your actual Web3Forms Access Key
          subject: `New Safari Booking Inquiry: ${formData.safariType}`,
          from_name: formData.fullName,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="booking-page">
      <div className="booking-hero">
        <div className="booking-hero-overlay"></div>
        <div className="booking-hero-content">
          <h1>Plan Your Custom Safari</h1>
          <p>Fill out our inquiry form below and our East Africa travel specialists will curate your dream itinerary.</p>
        </div>
      </div>

      <div className="booking-container">
        <SpotlightCard className="booking-card-wrapper">
          <div className="booking-card-inner">
            {submitted ? (
              <div className="success-message">
                <h2>Thank You, {formData.fullName}!</h2>
                <p>Your inquiry for <strong>{formData.safariType}</strong> has been received. Our safari experts will reach out to your email ({formData.email}) within 24 hours.</p>
                <button className="reset-btn" onClick={() => setSubmitted(false)}>Send Another Inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="safari-form">
                <h2>Safari Booking & Consultation Request</h2>
                {preSelectedPackage && (
                  <div className="selected-notice">
                    <span>Selected Package: <strong>{preSelectedPackage}</strong></span>
                  </div>
                )}

                {errorMessage && <div className="error-message" style={{ color: '#dc2626', marginBottom: '15px', fontSize: '0.9rem' }}>{errorMessage}</div>}
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      required 
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number / WhatsApp</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="e.g. +1 555 234 5678"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Selected Package / Interest</label>
                    <select 
                      name="safariType" 
                      value={formData.safariType} 
                      onChange={handleChange}
                    >
                      <option value="8 Days Kenya & Tanzania Migration Safari">8 Days Kenya & Tanzania Migration Safari</option>
                      <option value="7 Days Uganda Primate & Wildlife Discovery">7 Days Uganda Primate & Wildlife Discovery</option>
                      <option value="5 Days Rwanda Gorilla Trekking & Culture">5 Days Rwanda Gorilla Trekking & Culture</option>
                      <option value="10 Days Complete East Africa Grand Tour">10 Days Complete East Africa Grand Tour</option>
                      <option value="6 Days Classic Kenya Wildlife Safari">6 Days Classic Kenya Wildlife Safari</option>
                      <option value="5 Days Tanzania Northern Circuit Express">5 Days Tanzania Northern Circuit Express</option>
                      <option value="4 Days Queen Elizabeth & Bwindi Gorillas">4 Days Queen Elizabeth & Bwindi Gorillas</option>
                      <option value="4 Days Akagera & Volcanoes Rwanda Adventure">4 Days Akagera & Volcanoes Rwanda Adventure</option>
                      <option value="9 Days Ultimate Kenya Scenic & Photographic Safari">9 Days Ultimate Kenya Scenic & Photographic Safari</option>
                      <option value="8 Days Tanzania Migration & Zanzibar Beach Holiday">8 Days Tanzania Migration & Zanzibar Beach Holiday</option>
                      <option value="6 Days Uganda Source of the Nile & Wildlife">6 Days Uganda Source of the Nile & Wildlife</option>
                      <option value="3 Days Rwanda Express Gorilla Trek">3 Days Rwanda Express Gorilla Trek</option>
                      <option value="4 Days Samburu Special Wildlife Explorer">4 Days Samburu Special Wildlife Explorer</option>
                      <option value="5 Days Tsavo East & West Wilderness Adventure">5 Days Tsavo East & West Wilderness Adventure</option>
                      <option value="7 Days Ultimate Kenya Northern & Southern Circuit (Samburu & Tsavo)">7 Days Ultimate Kenya Northern & Southern Circuit (Samburu & Tsavo)</option>
                      <option value="Custom Safari Itinerary">Custom Tailored Itinerary</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Estimated Travel Date</label>
                    <input 
                      type="date" 
                      name="travelDate" 
                      required
                      value={formData.travelDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Number of Travelers</label>
                    <select name="travelers" value={formData.travelers} onChange={handleChange}>
                      <option value="1">1 Traveler (Solo)</option>
                      <option value="2">2 Travelers (Couple)</option>
                      <option value="3-4">3 - 4 Travelers (Family/Small Group)</option>
                      <option value="5+">5+ Travelers (Private Group)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Special Requests or Custom Interests</label>
                  <textarea 
                    name="message" 
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="submit-booking-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting Inquiry...' : 'Submit Safari Inquiry'}
                </button>
              </form>
            )}
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}