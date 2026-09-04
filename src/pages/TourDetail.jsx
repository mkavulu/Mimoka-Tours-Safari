// src/pages/TourDetail.jsx
//import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './TourDetail.css';

export default function TourDetail() {
  const { id } = useParams();

  // Mock database lookup based on ID for East African Packages
  const getTourData = (tourId) => {
    switch(tourId) {
      case "1":
        return {
          title: "8 Days Kenya & Tanzania Migration Safari",
          region: "Kenya & Tanzania",
          price: "$2,850",
          image: "/images/mara.jpg",
          overview: "Experience breathtaking savannahs, luxury tented camps, and expert-guided game drives tracking the Great Migration across Maasai Mara and Serengeti.",
          itinerary: [
            { day: "Day 1", title: "Arrival in Nairobi", desc: "Airport pickup, hotel check-in, and comprehensive safari briefing." },
            { day: "Day 2", title: "Masai Mara Game Reserves", desc: "Drive down to the legendary Mara for an afternoon introductory game drive." },
            { day: "Day 3-4", title: "Full Days in Masai Mara", desc: "Unmatched wildlife viewing tracking lions, cheetahs, and massive migration herds." },
            { day: "Day 5", title: "Cross into Serengeti National Park", desc: "Scenic drive across the border into Tanzania's iconic Serengeti plains." },
            { day: "Day 6", title: "Serengeti Exploration", desc: "Full-day game drives exploring the endless rolling grasslands." },
            { day: "Day 7", title: "Ngorongoro Crater Tour", desc: "Descend into the caldera for a unique wildlife haven experience." },
            { day: "Day 8", title: "Departure", desc: "Transfer back to Arusha/Nairobi for your homebound flight." }
          ]
        };
      case "2":
        return {
          title: "7 Days Uganda Primate & Wildlife Discovery",
          region: "Uganda",
          price: "$2,450",
          image: "/images/uganda.jpg",
          overview: "Immerse yourself in the Pearl of Africa. Track chimpanzees in Kibale and encounter mountain gorillas in Bwindi Impenetrable Forest.",
          itinerary: [
            { day: "Day 1", title: "Arrival in Entebbe/Kampala", desc: "Airport transfer and welcome dinner with local travel coordinators." },
            { day: "Day 2", title: "Transfer to Kibale National Park", desc: "Scenic drive past tea plantations to the primate capital of the world." },
            { day: "Day 3", title: "Chimpanzee Tracking & Queen Elizabeth", desc: "Morning chimpanzee trek followed by transfer to Queen Elizabeth National Park." },
            { day: "Day 4", title: "Game Drive & Kazinga Channel Boat Cruise", desc: "Spot tree-climbing lions and hippos along the scenic waterway." },
            { day: "Day 5", title: "Transfer to Bwindi Impenetrable Forest", desc: "Journey through the rolling hills of Kigezi highlands to Bwindi." },
            { day: "Day 6", title: "Mountain Gorilla Trekking Experience", desc: "A once-in-a-lifetime trek tracking endangered mountain gorillas face-to-face." },
            { day: "Day 7", title: "Return to Entebbe", desc: "Travel back to Entebbe International Airport for departure." }
          ]
        };
      case "3":
        return {
          title: "5 Days Rwanda Gorilla Trekking & Culture",
          region: "Rwanda",
          price: "$3,100",
          image: "/images/rwanda.jpg",
          overview: "Discover the Land of a Thousand Hills with luxury stays, Kigali city heritage tours, and majestic mountain gorilla tracking.",
          itinerary: [
            { day: "Day 1", title: "Arrival in Kigali", desc: "Visit the Kigali Genocide Memorial and settle into your luxury boutique hotel." },
            { day: "Day 2", title: "Volcanoes National Park Transfer", desc: "Scenic drive north to the foothills of the Virunga Massif." },
            { day: "Day 3", title: "Gorilla Trekking Adventure", desc: "Spend a magical hour with a habituated gorilla family in the dense forest canopy." },
            { day: "Day 4", title: "Golden Monkey Trek & Cultural Village", desc: "Track playful golden monkeys and visit the Iby'Iwacu cultural center." },
            { day: "Day 5", title: "Return to Kigali & Departure", desc: "Souvenir shopping at local artisan markets before your flight home." }
          ]
        };
      default:
        return {
          title: "10 Days Complete East Africa Grand Tour",
          region: "Multi-Country",
          price: "$4,200",
          image: "/images/serengeti.jpg",
          overview: "The ultimate East African luxury expedition covering Kenya's Maasai Mara, Tanzania's Serengeti, and Rwanda's Volcanoes.",
          itinerary: [
            { day: "Day 1-3", title: "Kenya Wildlife Highlights", desc: "Explore Nairobi and the sweeping open plains of the Maasai Mara." },
            { day: "Day 4-7", title: "Tanzania Migration & Crater", desc: "Traverse the Serengeti plains and descend into the Ngorongoro Crater." },
            { day: "Day 8-10", title: "Rwanda Primate Finale", desc: "Conclude your grand safari with elite gorilla tracking in Rwanda." }
          ]
        };
    }
  };

  const tour = getTourData(id);

  return (
    <div className="tour-detail-page">
      <div className="detail-hero" style={{ backgroundImage: `url(${tour.image})` }}>
        <div className="detail-hero-content">
          <span className="badge">{tour.region}</span>
          <h1>{tour.title}</h1>
          <p className="price-tag">Starting from <strong>{tour.price}</strong></p>
        </div>
      </div>

      <div className="detail-body">
        <div className="detail-main">
          <h2>Overview</h2>
          <p>{tour.overview}</p>

          <h2 className="itinerary-heading">Day-by-Day Itinerary</h2>
          <div className="itinerary-list">
            {tour.itinerary.map((item, index) => (
              <div key={index} className="itinerary-item">
                <span className="day-badge">{item.day}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="detail-sidebar">
          <div className="booking-box">
            <h3>Book This Safari</h3>
            <p>Secure your spot with our expert East African tour planners today.</p>
            <Link to="/contact" className="btn-book">Inquire Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}