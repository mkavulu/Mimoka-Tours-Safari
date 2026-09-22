// src/pages/Destinations.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Destinations.css';

// Import your images from src/assets/
import kenyaImg from '../assets/kenya.jpg';
import tanzaniaImg from '../assets/tanzania.jpg';
import rwandaImg from '../assets/rwanda.jpg';
import ugandaImg from '../assets/uganda.jpg';
import lionImg from '../assets/lion.jpeg';
import elephantImg from '../assets/elephant.jpeg';
import camp1Img from '../assets/camp1.jpg';
import camp2Img from '../assets/camp2.jpeg';

// Import Destination Explorer Data & Component Styles
import { destinationsData } from '../data/destinationsData';
import '../components/DestinationExplorer.css';

export default function Destinations() {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [activeDestination, setActiveDestination] = useState(destinationsData[0]);

  // Updated to include Rwanda
  const countries = ['All', 'Kenya', 'Tanzania', 'Uganda', 'Rwanda'];

  const filteredDestinations = selectedCountry === 'All' 
    ? destinationsData 
    : destinationsData.filter(d => d.country === selectedCountry);

  const tours = [
    { 
      id: 1, 
      title: "8 Days Kenya & Tanzania Migration Safari", 
      region: "Kenya & Tanzania", 
      image: kenyaImg,
      itinerary: [
        "Day 1: Arrival in Nairobi - Transfer to hotel for briefing.",
        "Day 2: Nairobi to Maasai Mara National Reserve - Afternoon game drive.",
        "Day 3: Maasai Mara - Full day exploring the savannah and Mara River.",
        "Day 4: Maasai Mara to Serengeti National Park (via Isebania border).",
        "Day 5: Serengeti National Park - Full day game viewing across endless plains.",
        "Day 6: Serengeti to Ngorongoro Conservation Area via Olduvai Gorge.",
        "Day 7: Ngorongoro Crater Tour - Descent into the caldera for wildlife viewing.",
        "Day 8: Ngorongoro to Arusha / Departure flight home."
      ]
    },
    { 
      id: 2, 
      title: "7 Days Uganda Primate & Wildlife Discovery", 
      region: "Uganda", 
      image: ugandaImg,
      itinerary: [
        "Day 1: Arrival at Entebbe International Airport - Transfer to Kampala.",
        "Day 2: Transfer to Queen Elizabeth National Park - Evening game drive.",
        "Day 3: Queen Elizabeth - Morning game drive & afternoon Kazinga Channel boat cruise.",
        "Day 4: Transfer to Bwindi Impenetrable National Park via Ishasha sector.",
        "Day 5: Bwindi Gorillas - Breathtaking Mountain Gorilla Trekking experience.",
        "Day 6: Lake Mburo National Park - Afternoon wildlife safari and boat ride.",
        "Day 7: Return to Entebbe / Kampala for departure."
      ]
    },
    { 
      id: 3, 
      title: "5 Days Rwanda Gorilla Trekking & Culture", 
      region: "Rwanda", 
      image: rwandaImg,
      itinerary: [
        "Day 1: Arrival in Kigali - City tour including the Genocide Memorial Centre.",
        "Day 2: Transfer to Volcanoes National Park - Scenic views of the Virunga Mountains.",
        "Day 3: Volcanoes National Park - Mountain Gorilla Trekking and cultural village walk.",
        "Day 4: Golden Monkey tracking in Volcanoes National Park or hike to Dian Fossey tombs.",
        "Day 5: Transfer back to Kigali for shopping and afternoon departure."
      ]
    },
    { 
      id: 4, 
      title: "10 Days Complete East Africa Grand Tour", 
      region: "Multi-Country", 
      image: tanzaniaImg,
      itinerary: [
        "Day 1: Arrival in Nairobi, Kenya.",
        "Day 2: Maasai Mara National Reserve - Big Cats game drives.",
        "Day 3: Maasai Mara full day game viewing.",
        "Day 4: Cross into Serengeti National Park, Tanzania.",
        "Day 5: Serengeti full day exploration.",
        "Day 6: Ngorongoro Crater wildlife sanctuary.",
        "Day 7: Fly to Entebbe, Uganda.",
        "Day 8: Transfer to Bwindi Impenetrable Forest.",
        "Day 9: Gorilla trekking in Bwindi.",
        "Day 10: Departure from Entebbe."
      ]
    },
    { 
      id: 5, 
      title: "6 Days Classic Kenya Wildlife Safari", 
      region: "Kenya", 
      image: lionImg,
      itinerary: [
        "Day 1: Nairobi to Amboseli National Park - View of Mt. Kilimanjaro.",
        "Day 2: Amboseli National Park - Full day elephant herds and observation hill.",
        "Day 3: Amboseli to Lake Nakuru National Park - Birdwatching and rhinos.",
        "Day 4: Lake Nakuru to Maasai Mara National Reserve.",
        "Day 5: Maasai Mara - Full day game drives.",
        "Day 6: Maasai Mara back to Nairobi for departure."
      ]
    },
    { 
      id: 6, 
      title: "5 Days Tanzania Northern Circuit Express", 
      region: "Tanzania", 
      image: elephantImg,
      itinerary: [
        "Day 1: Arusha to Tarangire National Park - Giant baobab trees and elephants.",
        "Day 2: Tarangire to Lake Manyara National Park - Tree-climbing lions.",
        "Day 3: Lake Manyara to Serengeti National Park.",
        "Day 4: Serengeti full day game drives.",
        "Day 5: Ngorongoro Crater descent and return to Arusha."
      ]
    },
    { 
      id: 7, 
      title: "4 Days Queen Elizabeth & Bwindi Gorillas", 
      region: "Uganda", 
      image: camp1Img,
      itinerary: [
        "Day 1: Entebbe to Queen Elizabeth National Park.",
        "Day 2: Queen Elizabeth game drive & Kazinga Channel boat cruise.",
        "Day 3: Transfer to Bwindi Impenetrable Forest via Ruhija/Buhoma.",
        "Day 4: Gorilla Trekking experience and return to Entebbe."
      ]
    },
    { 
      id: 8, 
      title: "4 Days Akagera & Volcanoes Rwanda Adventure", 
      region: "Rwanda", 
      image: camp2Img,
      itinerary: [
        "Day 1: Kigali to Akagera National Park - Afternoon boat safari on Lake Ihema.",
        "Day 2: Akagera National Park - Full day game drive searching for the Big Five.",
        "Day 3: Transfer from Akagera to Volcanoes National Park.",
        "Day 4: Golden Monkey tracking or cultural tour, then return to Kigali."
      ]
    },
    { 
      id: 9, 
      title: "9 Days Ultimate Kenya Scenic & Photographic Safari", 
      region: "Kenya", 
      image: kenyaImg,
      itinerary: [
        "Day 1: Nairobi arrival and overnight hotel stay.",
        "Day 2: Samburu National Reserve - Unique northern wildlife species.",
        "Day 3: Samburu full day game drives along Ewaso Ng'iro river.",
        "Day 4: Samburu to Ol Pejeta Conservancy - Chimpanzee sanctuary and rhinos.",
        "Day 5: Ol Pejeta to Lake Nakuru National Park.",
        "Day 6: Lake Nakuru to Maasai Mara.",
        "Day 7: Maasai Mara full day game drives.",
        "Day 8: Maasai Mara optional hot air balloon safari.",
        "Day 9: Maasai Mara back to Nairobi for departure."
      ]
    },
    { 
      id: 10, 
      title: "8 Days Tanzania Migration & Zanzibar Beach Holiday", 
      region: "Tanzania", 
      image: tanzaniaImg,
      itinerary: [
        "Day 1: Arusha to Lake Manyara National Park.",
        "Day 2: Lake Manyara to Serengeti National Park.",
        "Day 3: Serengeti National Park full day wildlife tracking.",
        "Day 4: Serengeti to Ngorongoro Crater.",
        "Day 5: Ngorongoro Crater tour, fly to Zanzibar.",
        "Day 6: Zanzibar Stone Town historical tour and spice farm visit.",
        "Day 7: Zanzibar North Coast - Relaxing beach day and marine activities.",
        "Day 8: Transfer to Zanzibar Airport for departure flight."
      ]
    },
    { 
      id: 11, 
      title: "6 Days Uganda Source of the Nile & Wildlife", 
      region: "Uganda", 
      image: ugandaImg,
      itinerary: [
        "Day 1: Arrival in Entebbe - Jinja source of the Nile tour.",
        "Day 2: Jinja white-water rafting or boat cruise, transfer to Murchison Falls.",
        "Day 3: Murchison Falls National Park - Game drive and boat trip to the bottom of the falls.",
        "Day 4: Hike to the top of Murchison Falls, transfer to Kibale Forest.",
        "Day 5: Kibale National Park - Chimpanzee tracking and Bigodi wetland walk.",
        "Day 6: Return drive to Kampala / Entebbe for departure."
      ]
    },
    { 
      id: 12, 
      title: "3 Days Rwanda Express Gorilla Trek", 
      region: "Rwanda", 
      image: rwandaImg,
      itinerary: [
        "Day 1: Arrival in Kigali International Airport - Scenic drive to Volcanoes National Park.",
        "Day 2: Volcanoes National Park - Mountain Gorilla Trekking adventure in the misty bamboo forests.",
        "Day 3: Iby'Iwacu Cultural Village visit, return to Kigali for departure."
      ]
    },
    { 
      id: 13, 
      title: "4 Days Samburu Special Wildlife Explorer", 
      region: "Kenya", 
      image: lionImg,
      itinerary: [
        "Day 1: Nairobi to Samburu National Reserve - Scenic drive north across the equator with afternoon game drive.",
        "Day 2: Samburu National Reserve - Full day game viewing searching for the 'Samburu Special Five' (Grevy's zebra, Somali ostrich, reticulated giraffe, gerenuk, and beisa oryx).",
        "Day 3: Samburu & Buffalo Springs - Morning and afternoon game drives along the Ewaso Ng'iro River.",
        "Day 4: Samburu National Reserve back to Nairobi for departure."
      ]
    },
    { 
      id: 14, 
      title: "5 Days Tsavo East & West Wilderness Adventure", 
      region: "Kenya", 
      image: elephantImg,
      itinerary: [
        "Day 1: Nairobi to Tsavo East National Park - Famous for the vast red elephants and Yatta Plateau.",
        "Day 2: Tsavo East to Tsavo West National Park - Visit Mzima Springs to view underwater hippos and crocodiles.",
        "Day 3: Tsavo West National Park - Game drive exploring the Shetani Lava Flow and Rhino Sanctuary.",
        "Day 4: Tsavo West to Amboseli National Park - Spectacular afternoon views of Mount Kilimanjaro.",
        "Day 5: Amboseli National Park morning game drive, then return to Nairobi."
      ]
    },
    { 
      id: 15, 
      title: "7 Days Ultimate Kenya Northern & Southern Circuit (Samburu & Tsavo)", 
      region: "Kenya", 
      image: kenyaImg,
      itinerary: [
        "Day 1: Arrival in Nairobi - Hotel check-in and safari briefing.",
        "Day 2: Nairobi to Samburu National Reserve - Afternoon game drive along the riverbanks.",
        "Day 3: Samburu National Reserve - Full day exploring northern arid landscapes and unique wildlife.",
        "Day 4: Samburu back to Nairobi, then transfer south toward Tsavo East.",
        "Day 5: Tsavo East National Park - Full day game drives tracking lions and red dust elephants.",
        "Day 6: Tsavo East to Tsavo West - Visit Mzima Springs and Roaring Rocks.",
        "Day 7: Tsavo West back to Nairobi for your outbound flight."
      ]
    }
  ];

  return (
    <div className="destinations-page">
      {/* Hero Banner with Background Photo */}
      <div className="destinations-hero" style={{ backgroundImage: `url(${kenyaImg})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our Safari Packages</h1>
          <p>Hand-crafted luxury journeys across Kenya, Tanzania, Uganda, and Rwanda</p>
        </div>
      </div>

      {/* Phase 2: Interactive Destination Explorer Section */}
      <section className="explorer-section">
        <div className="explorer-header">
          <h2>Explore Iconic East African Parks</h2>
          <p>Select a region to preview key wildlife highlights and best visiting seasons.</p>
          
          <div className="country-filter-tabs">
            {countries.map(country => (
              <button
                key={country}
                className={selectedCountry === country ? 'tab-btn active' : 'tab-btn'}
                onClick={() => setSelectedCountry(country)}
              >
                {country}
              </button>
            ))}
          </div>
        </div>

        <div className="explorer-grid">
          <div className="destinations-list">
            {filteredDestinations.map(dest => (
              <div 
                key={dest.id} 
                className={`destination-card ${activeDestination.id === dest.id ? 'active' : ''}`}
                onClick={() => setActiveDestination(dest)}
              >
                <span className="dest-country-tag">{dest.country}</span>
                <h3>{dest.name}</h3>
                <p>{dest.tagline}</p>
              </div>
            ))}
          </div>

          <div className="destination-preview-panel">
            <span className="preview-badge">Featured Sanctuary</span>
            <div className="preview-content">
              <h3>{activeDestination.name}</h3>
              <p className="preview-tagline">{activeDestination.tagline}</p>
              
              <div className="preview-details">
                <div className="detail-item">
                  <strong>Best Time to Visit:</strong>
                  <span>{activeDestination.bestTime}</span>
                </div>
                <div className="detail-item">
                  <strong>Wildlife & Highlights:</strong>
                  <span>(Click to explore experience)</span>
                </div>
                
                <ul className="highlights-chips">
                  {activeDestination.highlights.map((h, idx) => (
                    <li key={idx}>
                      <Link to={`/experience/${h.slug}`}>
                        {h.name} &rarr;
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className="explore-tour-btn"
                onClick={() => navigate(`/tour/${activeDestination.tourId}`)}
              >
                View Associated Tours &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tour Grid Container */}
      <div className="tours-content-container">
        <div className="tours-grid-container">
          {tours.map(tour => (
            <div key={tour.id} className="tour-card">
              <img src={tour.image} alt={tour.title} />
              <div className="tour-info">
                <span className="tour-region">{tour.region}</span>
                <h3>{tour.title}</h3>
                <Link to={`/tour/${tour.id}`} className="btn-details">View Itinerary</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}