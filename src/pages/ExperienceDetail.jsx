// src/pages/ExperienceDetail.jsx
import { useParams, Link } from 'react-router-dom';
import SpotlightCard from '../components/SpotlightCard';
import './ExperienceDetail.css';
import '../components/SpotlightCard.css';

// Import assets for photo display
import lionImg from '../assets/lion.jpeg';
import elephantImg from '../assets/elephant.jpeg';
import kenyaImg from '../assets/kenya.jpg';
import BigImg from '../assets/hero-safari.jpg';
import wildImg from '../assets/The-Great-Migration.jpg';
import wild1Img from '../assets/Wildebeest-Migration.jpg';
import HotImg from '../assets/Hot-Air-Ballon.jpeg';
import Hot1Img from '../assets/Ballon-Safaris.jpg';
import maasaiImg from '../assets/maasai.jpeg';
import maasai2Img from '../assets/maasai-manyatta.jpg';

const experienceDatabase = {
  'big-five': {
    title: "Tracking Africa's Legendary Big Five",
    subtitle: "Lion, Leopard, Elephant, Buffalo, and Rhinoceros in their pristine habitats.",
    image: BigImg,
    secondaryImage: elephantImg,
    description: "East Africa is renowned worldwide for offering premier wildlife viewings of the legendary Big Five. From tracking pride coalitions moving across open savannahs to spotting rare black rhinos under strict sanctuary protection, every game drive provides incredible photographic opportunities."
  },
  'great-migration': {
    title: "The Great Wildebeest Migration",
    subtitle: "Over 1.5 million wildebeest, zebras, and gazelles crossing dangerous river channels.",
    image: wildImg,
    secondaryImage: wild1Img,
    description: "Recognized universally as one of the natural wonders of the world, the Great Migration is a continuous, cyclical journey. Herds brave crocodile-filled waters along the Mara and Grumeti rivers, driven entirely by primitive survival instincts and fresh grazing lands."
  },
  'hot-air-balloon': {
    title: "Sunrise Hot Air Balloon Safaris",
    subtitle: "Float silently high above the sweeping savannah as dawn breaks.",
    image: HotImg,
    secondaryImage: Hot1Img,
    description: "Experience the ultimate bird's-eye view of the African wilderness. Lift off at dawn just as the sun illuminates the plains, drifting effortlessly over roaming herds before touching down for a traditional champagne bush breakfast prepared right in the bush."
  },
  'maasai-culture': {
    title: "Authentic Maasai Cultural Visits",
    subtitle: "Immerse yourself in the timeless traditions, songs, and dances of the Maasai warriors.",
    image: maasaiImg,
    secondaryImage: maasai2Img,
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
    <div className="experience-detail-page">
      {/* Hero Banner with Brighter, Visible Background Photo */}
      <div className="exp-hero" style={{ backgroundImage: `url(${experience.image})` }}>
        <div className="exp-hero-overlay"></div>
        <div className="exp-hero-content">
          <h1>{experience.title}</h1>
          <p>{experience.subtitle}</p>
        </div>
      </div>

      {/* Content Container wrapped in SpotlightCard */}
      <div className="experience-container">
        <Link to="/destinations" className="back-link">
          &larr; Back to Destinations & Explorer
        </Link>
        
        <SpotlightCard className="experience-spotlight-wrapper">
          <div className="spotlight-inner-padding">
            <span className="spotlight-badge">Featured Experience Spotlight</span>
            <h2 className="experience-heading">Experience Overview</h2>
            <p className="experience-desc">{experience.description}</p>
            
            <div className="experience-image-grid">
              <div className="exp-img-wrapper">
                <img src={experience.image} alt="Experience visual 1" className="exp-img" />
              </div>
              <div className="exp-img-wrapper">
                <img src={experience.secondaryImage} alt="Experience visual 2" className="exp-img" />
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}