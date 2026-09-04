// src/pages/Destinations.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Destinations.css';

// Import your images from src/assets/
import kenyaImg from '../assets/kenya.jpg';
import tanzaniaImg from '../assets/tanzania.jpg';
import rwandaImg from '../assets/rwanda.jpg';
import ugandaImg from '../assets/uganda.jpg';

export default function Destinations() {
  const tours = [
    { 
      id: 1, 
      title: "8 Days Kenya & Tanzania Migration Safari", 
      region: "Kenya & Tanzania", 
      price: "$2,850", 
      image: kenyaImg 
    },
    { 
      id: 2, 
      title: "7 Days Uganda Primate & Wildlife Discovery", 
      region: "Uganda", 
      price: "$2,450", 
      image: ugandaImg 
    },
    { 
      id: 3, 
      title: "5 Days Rwanda Gorilla Trekking & Culture", 
      region: "Rwanda", 
      price: "$3,100", 
      image: rwandaImg 
    },
    { 
      id: 4, 
      title: "10 Days Complete East Africa Grand Tour", 
      region: "Multi-Country", 
      price: "$4,200", 
      image: tanzaniaImg 
    }
  ];

  return (
    <div className="destinations-page">
      <header className="page-header">
        <h1>Our Safari Packages</h1>
        <p>Hand-crafted luxury journeys across Kenya, Tanzania, Uganda, and Rwanda</p>
      </header>

      <div className="tours-grid-container">
        {tours.map(tour => (
          <div key={tour.id} className="tour-card">
            <img src={tour.image} alt={tour.title} />
            <div className="tour-info">
              <span className="tour-region">{tour.region}</span>
              <h3>{tour.title}</h3>
              <p className="tour-price">From <strong>{tour.price}</strong> per person</p>
              <Link to={`/tour/${tour.id}`} className="btn-details">View Itinerary</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}