// src/pages/Destinations.jsx
import React from 'react';
import { Link } from 'react-router-dom';
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

export default function Destinations() {
  const tours = [
    { 
      id: 1, 
      title: "8 Days Kenya & Tanzania Migration Safari", 
      region: "Kenya & Tanzania", 
      price: "$2,850", 
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
      price: "$2,450", 
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
      price: "$3,100", 
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
      price: "$4,200", 
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
      price: "$1,950", 
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
      price: "$2,100", 
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
      price: "$1,650", 
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
      price: "$2,300", 
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
      price: "$3,400", 
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
      price: "$3,200", 
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
      price: "$1,850", 
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
      price: "$1,950", 
      image: rwandaImg,
      itinerary: [
        "Day 1: Arrival in Kigali International Airport - Scenic drive to Volcanoes National Park.",
        "Day 2: Volcanoes National Park - Mountain Gorilla Trekking adventure in the misty bamboo forests.",
        "Day 3: Iby'Iwacu Cultural Village visit, return to Kigali for departure."
      ]
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