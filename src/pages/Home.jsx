// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import BlurText from '../components/BlurText';
import SpotlightCard from '../components/SpotlightCard';
import './Home.css';

// Import hero background image
import heroImg from "../assets/hero-safari.jpg";

// Import regional images from src/assets/
import kenyaImg from '../assets/kenya.jpg';
import tanzaniaImg from '../assets/tanzania.jpg';
import rwandaImg from '../assets/rwanda.jpg';
import ugandaImg from '../assets/uganda.jpg';

// Import Big Five images from src/assets/ (matching your .jpeg extensions)
import lionImg from '../assets/lion.jpeg';
import leopardImg from '../assets/leopard.jpeg';
import buffaloImg from '../assets/buffalo.jpeg';
import rhinoImg from '../assets/rhino.jpeg';
import elephantImg from '../assets/elephant.jpeg';

// Import Camp images from src/assets/ (matching camp2.jpeg)
import camp1Img from '../assets/camp1.jpg';
import camp2Img from '../assets/camp4.jpg';
import camp3Img from '../assets/camp3.jpeg';
import camp4Img from '../assets/camp5.jpg';

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section with Background Photo */}
      <section 
        className="hero-section" 
        style={{
          background: `linear-gradient(rgba(27, 48, 39, 0.65), rgba(27, 48, 39, 0.65)), url(${heroImg}) center/cover no-repeat`
        }}
      >
        <div className="hero-content">
          <BlurText text="Discover the Magic of East Africa" delay={150} />
          <p>Experience custom-designed luxury safaris, legendary wildlife migrations, and primate treks with Mimokatours.</p>
          <div className="hero-buttons">
            <Link to="/destinations" className="btn-primary">Explore Packages</Link>
            <Link to="/contact" className="btn-secondary">Tailor Your Safari</Link>
          </div>
        </div>
      </section>

      {/* Intro Overview Section */}
      <section className="intro-overview-section container" style={{ padding: '80px 10%', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={{ color: 'var(--primary-color)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
            Safari Tours in East Africa
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', color: 'var(--primary-color)', margin: '15px 0 25px 0' }}>
            Tour and Holiday Destinations in East Africa for Your Next Holiday
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
            Welcome to Mimokatours, where we specialize in offering the most unforgettable safari experiences across East Africa. Our goal is to help you discover the magic of Africa through our tailor-made safari tours, cultural tours, and luxury tour packages.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            If you're looking for a wildlife experience like no other, our safari tours are perfect for you. Our experienced guides will take you on a journey through the savannahs and jungles, where you'll see magnificent creatures like lions, elephants, and giraffes in their natural habitat. Our 4x4 wheel drive vehicles are equipped with modern amenities to ensure you have an exceptional safari experience.
          </p>
        </div>
      </section>

      {/* Featured Regions Section with Spotlight Cards & All 6 Destinations */}
      <section className="regions-section" style={{ padding: '40px 5%' }}>
        <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-heading)', fontSize: '2.4rem', color: 'var(--primary-color)', marginBottom: '40px' }}>
          Top East African Destinations
        </h2>
        <div className="regions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          
          {/* Card 1: Kenya Safaris */}
          <SpotlightCard>
            <Link to="/destinations" className="mufasa-card" style={{ border: 'none', boxShadow: 'none' }}>
              <img src={kenyaImg} alt="Kenya Safaris" />
              <div className="card-overlay">
                <div className="card-line"></div>
                <h3>Kenya Safaris</h3>
              </div>
            </Link>
          </SpotlightCard>

          {/* Card 2: Tanzania Safaris */}
          <SpotlightCard>
            <Link to="/destinations" className="mufasa-card" style={{ border: 'none', boxShadow: 'none' }}>
              <img src={tanzaniaImg} alt="Tanzania Safaris" />
              <div className="card-overlay">
                <div className="card-line"></div>
                <h3>Tanzania Safaris</h3>
              </div>
            </Link>
          </SpotlightCard>

          {/* Card 3: Rwanda Safaris */}
          <SpotlightCard>
            <Link to="/destinations" className="mufasa-card" style={{ border: 'none', boxShadow: 'none' }}>
              <img src={rwandaImg} alt="Rwanda Safaris" />
              <div className="card-overlay">
                <div className="card-line"></div>
                <h3>Rwanda Safaris</h3>
              </div>
            </Link>
          </SpotlightCard>

          {/* Card 4: Uganda Safaris */}
          <SpotlightCard>
            <Link to="/destinations" className="mufasa-card" style={{ border: 'none', boxShadow: 'none' }}>
              <img src={ugandaImg} alt="Uganda Safaris" />
              <div className="card-overlay">
                <div className="card-line"></div>
                <h3>Uganda Safaris</h3>
              </div>
            </Link>
          </SpotlightCard>

          {/* Card 5: Kenya-Tanzania Safaris */}
          <SpotlightCard>
            <Link to="/destinations" className="mufasa-card" style={{ border: 'none', boxShadow: 'none' }}>
              <img src={tanzaniaImg} alt="Kenya-Tanzania Safaris" />
              <div className="card-overlay">
                <div className="card-line"></div>
                <h3>Kenya-Tanzania Safaris</h3>
              </div>
            </Link>
          </SpotlightCard>

          {/* Card 6: Multi-Country Safaris */}
          <SpotlightCard>
            <Link to="/destinations" className="mufasa-card" style={{ border: 'none', boxShadow: 'none' }}>
              <img src={kenyaImg} alt="Multi-Country Safaris" />
              <div className="card-overlay">
                <div className="card-line"></div>
                <h3>Multi-Country Safaris</h3>
              </div>
            </Link>
          </SpotlightCard>

        </div>
      </section>

      {/* The Big Five of Africa Section */}
      <section className="big-five-section" style={{ padding: '60px 5%', background: 'var(--bg-light)' }}>
        <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-heading)', fontSize: '2.4rem', color: 'var(--primary-color)', marginBottom: '10px' }}>
          The Big Five of Africa
        </h2>
        <div style={{ width: '50px', height: '2px', background: 'var(--primary-color)', margin: '0 auto 40px auto' }}></div>
        
        <div className="big-five-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
          
          <div className="mufasa-card" style={{ height: '260px', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
            <img src={buffaloImg} alt="African Buffalo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="card-overlay">
              <h3>Buffalo</h3>
            </div>
          </div>

          <div className="mufasa-card" style={{ height: '260px', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
            <img src={leopardImg} alt="Leopard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="card-overlay">
              <h3>Leopard</h3>
            </div>
          </div>

          <div className="mufasa-card" style={{ height: '260px', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
            <img src={rhinoImg} alt="Rhino" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="card-overlay">
              <h3>Rhino</h3>
            </div>
          </div>

          <div className="mufasa-card" style={{ height: '260px', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
            <img src={lionImg} alt="Lion" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="card-overlay">
              <h3>Lion</h3>
            </div>
          </div>

          <div className="mufasa-card" style={{ height: '260px', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
            <img src={elephantImg} alt="Elephant" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="card-overlay">
              <h3>Elephant</h3>
            </div>
          </div>

        </div>
      </section>

      {/* Luxury Camps Showcase Section */}
      <section className="camps-section" style={{ padding: '80px 5%' }}>
        <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-heading)', fontSize: '2.4rem', color: 'var(--primary-color)', marginBottom: '40px' }}>
          Handpicked Luxury Tented Camps
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div className="mufasa-card" style={{ height: '350px', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
            <img src={camp1Img} alt="Luxury Safari Camp 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="card-overlay">
              <div className="card-line"></div>
              <h3>Exclusive Wilderness Camps</h3>
            </div>
          </div>
          <div className="mufasa-card" style={{ height: '350px', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
            <img src={camp2Img} alt="Luxury Safari Camp 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="card-overlay">
              <div className="card-line"></div>
              <h3>Savannah Tented Retreats</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing & Budget Info Section */}
      <section className="pricing-info-section" style={{ background: 'var(--bg-light)', padding: '80px 10%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', color: 'var(--primary-color)', marginBottom: '20px' }}>
              Transparent Pricing & Affordable Adventures
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '15px' }}>
              We understand that planning a safari trip can be overwhelming, especially regarding budgeting. That's why we strive to offer affordable tour charges without compromising the quality of our services.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '25px' }}>
              Our pricing is transparent, and we always ensure that our clients get value for their money. We work with different budgets and can help you plan a safari trip within your means.
            </p>
            <Link to="/contact" className="btn-primary" style={{ display: 'inline-block' }}>Request A Quote</Link>
          </div>
          <div style={{ background: 'var(--white)', padding: '40px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--primary-color)', marginBottom: '15px' }}>
              East Africa Highlights
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-muted)' }}>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>✔ Professional multi-lingual safari guides</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>✔ Custom 4x4 landcruisers with charging systems</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>✔ Handpicked luxury lodges & tented camps</li>
              <li style={{ padding: '10px 0' }}>✔ Flexible and customizable itineraries</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Safari Highlights Gallery Section with Auto-Playing Slider */}
      <section className="gallery-section" style={{ padding: '60px 5%' }}>
        <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-heading)', color: 'var(--primary-color)', fontSize: '2.2rem', marginBottom: '20px' }}>
          Safari Moments & Landscapes
        </h2>
        <ImageSlider 
          autoPlay={true}
          autoPlayInterval={4000}
          images={[
            tanzaniaImg, 
            kenyaImg, 
            rwandaImg,
            lionImg,
            elephantImg,
            camp1Img,
            camp2Img,
            camp3Img,
            camp4Img,

          ]} 
        />
      </section>
    </div>
  );
}