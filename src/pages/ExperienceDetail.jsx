// src/pages/ExperienceDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Destinations.css';

// Import assets for photo display
import lionImg from '../assets/lion.jpeg';
import elephantImg from '../assets/elephant.jpeg';
import kenyaImg from '../assets/kenya.jpg';
import camp1Img from '../assets/camp1.jpg';

const experienceDatabase = {
  'big-five': {
    title: "Tracking Africa's Legendary Big Five",
    subtitle: "Lion, Leopard, Elephant, Buffalo, and Rhinoceros in their pristine habitats.",
    image: lionImg,
    secondaryImage: elephantImg,
    description: "East Africa is renowned worldwide for offering premier wildlife viewings of the legendary Big Five. From tracking pride coalitions moving across open savannahs to spotting rare black rhinos under strict sanctuary protection, every game drive provides incredible photographic opportunities."
  },
  'great-migration': {
    title: "The Great Wildebeest Migration",
    subtitle: "Over 1.5 million wildebeest, zebras, and gazelles crossing dangerous river channels.",
    image: kenyaImg,
    secondaryImage: camp1Img,
    description: "Recognized universally as one of the natural wonders of the world, the Great Migration is a continuous, cyclical journey. Herds brave crocodile-filled waters along the Mara and Grumeti rivers, driven entirely by primitive survival instincts and fresh grazing lands."
  },
  'hot-air-balloon': {
    title: "Sunrise Hot Air Balloon Safaris",
    subtitle: "Float silently high above the sweeping savannah as dawn breaks.",
    image: camp1Img,
    secondaryImage: lionImg,
    description: "Experience the ultimate bird's-eye view of the African wilderness. Lift off at dawn just as the sun illuminates the plains, drifting effortlessly over roaming herds before touching down for a traditional champagne bush breakfast prepared right in the bush."
  },
  'maasai-culture': {
    title: "Authentic Maasai Cultural Visits",
    subtitle: "Immerse yourself in the timeless traditions, songs, and dances of the Maasai warriors.",
    image: kenyaImg,
    secondaryImage: elephantImg,
    description: "Step inside a traditional manyatta to connect directly with local pastoralist communities. Learn about indigenous conservation methods, medicinal plant knowledge, and witness the world-famous adumu leaping ceremony firsthand."
  }
};

export default function ExperienceDetail() {
  const { slug } = useParams();
  const experience = experienceDatabase[slug] || {
    title: "Exclusive East African Wildlife Experience",
    subtitle: "Immersive nature and cultural safari adventures.",
    image: kenyaImg,
    secondaryImage: lionImg,
    description: "Explore the breathtaking landscapes, abundant wildlife populations, and rich heritage destinations across East Africa curated specifically for luxury travelers."
  };

  return (
    <div className="destinations-page" style={{ paddingBottom: '80px' }}>
      <div className="destinations-hero" style={{ backgroundImage: `url(${experience.image})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>{experience.title}</h1>
          <p>{experience.subtitle}</p>
        </div>
      </div>

      <div className="experience-container">
        <Link to="/destinations" className="back-link">
          &larr; Back to Destinations & Explorer
        </Link>
        
        <h2 className="experience-heading">Experience Overview</h2>
        <p className="experience-desc">{experience.description}</p>
        
        {/* Replaced fixed 1fr 1fr inline grid with a responsive class */}
        <div className="experience-image-grid">
          <img src={experience.image} alt="Experience visual 1" className="exp-img" />
          <img src={experience.secondaryImage} alt="Experience visual 2" className="exp-img" />
        </div>
      </div>
    </div>
  );
}