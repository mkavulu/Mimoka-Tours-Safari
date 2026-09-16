// src/pages/Contact.jsx
import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';

const countries = [
  { name: "Kenya", code: "+254" },
  { name: "Tanzania", code: "+255" },
  { name: "Uganda", code: "+256" },
  { name: "Rwanda", code: "+250" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Canada", code: "+1" },
  { name: "South Africa", code: "+27" },
  { name: "Australia", code: "+61" },
  { name: "Germany", code: "+49" },
  { name: "France", code: "+33" },
  { name: "India", code: "+91" },
  { name: "United Arab Emirates", code: "+971" },
  { name: "Nigeria", code: "+234" },
  { name: "Ghana", code: "+233" },
  { name: "Italy", code: "+39" },
  { name: "Spain", code: "+34" },
  { name: "Netherlands", code: "+31" },
  { name: "Switzerland", code: "+41" },
  { name: "Japan", code: "+81" },
  { name: "China", code: "+86" },
  { name: "Brazil", code: "+55" },
].sort((a, b) => a.name.localeCompare(b.name));

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

  const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.name === "Kenya") || countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Simple and effective sanitization helper to strip HTML tags/scripts
  const sanitizeInput = (value) => {
    if (typeof value !== 'string') return value;
    return value.replace(/<[^>]*>?/gm, '').trim();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Apply sanitization to text inputs as they are typed
    const cleanedValue = (name === 'message' || name === 'fullName' || name === 'phone') 
      ? sanitizeInput(value) 
      : value;

    setFormData({ ...formData, [name]: cleanedValue });
  };

  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.code.includes(searchQuery)
  );

  // Combines the selected country code with the typed phone number for Web3Forms
  const fullPhoneNumber = `${selectedCountry.code} ${formData.phone}`;

  return (
    <div className="contact-page">
      <header className="page-header">
        <h1>Request a Safari Quote</h1>
        <p>Fill out the form below to design your custom African adventure with our specialists</p>
      </header>

      <div className="contact-container">
        <form 
          action="https://api.web3forms.com/submit" 
          method="POST" 
          className="contact-form"
        >
          {/* Web3Forms Access Key */}
          <input type="hidden" name="access_key" value="a6c2285c-4424-40be-b972-bfa6c0c07212" />
          
          {/* Optional Subject Line for your incoming emails */}
          <input type="hidden" name="subject" value="New Safari Quote Request - Mimoka Safaris" />

          <div className="form-row">
            <div className="form-group">
              <label>Full Name <span className="required-star">*</span></label>
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
              <label>Email Address <span className="required-star">*</span></label>
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
              <label>Phone Number / WhatsApp <span className="required-star">*</span></label>
              <div className="phone-input-wrapper">
                
                <div className="country-dropdown-container" ref={dropdownRef}>
                  <div 
                    className="country-select-btn" 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span>{selectedCountry.name} ({selectedCountry.code})</span>
                    <span className="dropdown-arrow">▼</span>
                  </div>

                  {isDropdownOpen && (
                    <div className="country-dropdown-menu">
                      <div className="country-search-box">
                        <input 
                          type="text" 
                          placeholder="Search country or code..." 
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          autoFocus
                        />
                      </div>
                      <ul className="country-list">
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((country, index) => (
                            <li 
                              key={index} 
                              className={`country-item ${selectedCountry.code === country.code && selectedCountry.name === country.name ? 'active' : ''}`}
                              onClick={() => {
                                setSelectedCountry(country);
                                setIsDropdownOpen(false);
                                setSearchQuery('');
                              }}
                            >
                              <span className="c-name">{country.name}</span>
                              <span className="c-code">{country.code}</span>
                            </li>
                          ))
                        ) : (
                          <li className="no-country">No country found</li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Hidden input to pass the combined full phone number to Web3Forms */}
                <input type="hidden" name="full_phone" value={fullPhoneNumber} />

                {/* Fixed input field bound directly to form state */}
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="712 345678" 
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Interested Destination <span className="required-star">*</span></label>
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
                placeholder="e.g., 7" 
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

          <button type="submit" className="btn-submit">
            Submit Quote Request
          </button>
        </form>
      </div>
    </div>
  );
}