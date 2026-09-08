// src/components/DayExcursions.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DayExcursions.css';

// Import your local asset image here (adjust path if your folder structure differs)
import coastImage from '../assets/coast.jpg';

export default function DayExcursions() {
  const [activeTab, setActiveTab] = useState('nairobi');
  const navigate = useNavigate();

  const nairobiTours = [
    {
      id: 'nnp-1',
      title: 'Nairobi National Park Half-Day Game Drive',
      duration: '4-5 Hours',
      highlights: 'Spot rhinos, lions, and giraffes with the city skyline in the background.',
      price: '$120 per person',
      image: coastImage, // You can use coastImage or a Nairobi-specific image variable here
    },
    {
      id: 'nnp-2',
      title: 'Sheldrick Wildlife Trust & Giraffe Centre Tour',
      duration: 'Half Day (Morning)',
      highlights: 'Get up close with baby elephants and feed Rothschild giraffes.',
      price: '$95 per person',
      image: coastImage,
    },
    {
      id: 'nnp-3',
      title: 'Nairobi National Museum & City Walking Tour',
      duration: 'Full Day',
      highlights: 'Explore Kenyan history, culture, and vibrant downtown markets.',
      price: '$80 per person',
      image: coastImage,
    }
  ];

  const coastalExtensions = [
    {
      id: 'coast-1',
      title: '3 Days Diani Beach Escape',
      duration: '3 Days / 2 Nights',
      highlights: 'Relax on white sandy beaches, crystal-clear waters, and optional snorkeling.',
      price: 'From $350 per person',
      image: coastImage, // Utilizing your local asset here
    },
    {
      id: 'coast-2',
      title: '4 Days Mombasa Heritage & Beach Getaway',
      duration: '4 Days / 3 Nights',
      highlights: 'Explore Fort Jesus, Old Town, and enjoy beachfront resort luxury.',
      price: 'From $480 per person',
      image: coastImage,
    },
    {
      id: 'coast-3',
      title: '4 Days Zanzibar Spice & Beach Holiday',
      duration: '4 Days / 3 Nights',
      highlights: 'Stone Town walking tour, spice farm visit, and Nungwi beach relaxation.',
      price: 'From $550 per person',
      image: coastImage,
    }
  ];

  const handleBookNow = (tourTitle) => {
    navigate('/contact', { state: { selectedTour: tourTitle } });
  };

  return (
    <div className="excursions-page">
      <div className="excursions-hero">
        <h1>Day Excursions & Beach Extensions</h1>
        <p>Enhance your safari experience with quick city adventures or relaxing coastal getaways.</p>
      </div>

      <div className="excursions-container">
        {/* Category Switcher Tabs */}
        <div className="excursion-tabs">
          <button 
            className={activeTab === 'nairobi' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => setActiveTab('nairobi')}
          >
            Nairobi Day Tours
          </button>
          <button 
            className={activeTab === 'coastal' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => setActiveTab('coastal')}
          >
            Coastal Beach Extensions
          </button>
        </div>

        {/* Tours Grid */}
        <div className="excursions-grid">
          {(activeTab === 'nairobi' ? nairobiTours : coastalExtensions).map((tour) => (
            <div key={tour.id} className="excursion-card">
              {/* Tour Card Image Display */}
              <div className="excursion-image-container">
                <img src={tour.image} alt={tour.title} className="excursion-img" />
                <span className="excursion-duration">{tour.duration}</span>
              </div>

              <div className="excursion-info">
                <h3>{tour.title}</h3>
                <p>{tour.highlights}</p>
                <div className="excursion-footer">
                  <span className="excursion-price">{tour.price}</span>
                  <button className="book-btn" onClick={() => handleBookNow(tour.title)}>
                    Inquire / Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}