// src/pages/Home.jsx
//import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider'; // Import the ImageSlider component
import './Home.css';

// Import images from src/assets/
import kenyaImg from '../assets/kenya.jpg';
import tanzaniaImg from '../assets/tanzania.jpg';
import rwandaImg from '../assets/rwanda.jpg';
import ugandaImg from '../assets/uganda.jpg';

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover the Magic of East Africa</h1>
          <p>Experience custom-designed luxury safaris, legendary wildlife migrations, and primate treks with Mimokatours.</p>
          <div className="hero-buttons">
            <Link to="/destinations" className="btn-primary">Explore Packages</Link>
            <Link to="/contact" className="btn-secondary">Tailor Your Safari</Link>
          </div>
        </div>
      </section>

      {/* Featured Regions Section */}
      <section className="regions-section">
        <h2>Top East African Destinations</h2>
        <div className="regions-grid">
          <div className="region-card">
            <img src={kenyaImg} alt="Kenya Safari" />
            <h3>Kenya</h3>
            <p>Experience the iconic Maasai Mara, Amboseli, and majestic Rift Valley lakes.</p>
            <Link to="/destinations" className="link-arrow">Explore Kenya &rarr;</Link>
          </div>
          
          <div className="region-card">
            <img src={tanzaniaImg} alt="Tanzania Safari" />
            <h3>Tanzania</h3>
            <p>Witness the Great Wildebeest Migration in the Serengeti and Ngorongoro Crater.</p>
            <Link to="/destinations" className="link-arrow">Explore Tanzania &rarr;</Link>
          </div>

          <div className="region-card">
            <img src={rwandaImg} alt="Rwanda Safari" />
            <h3>Rwanda</h3>
            <p>Embark on unforgettable mountain gorilla trekking adventures in Volcanoes National Park.</p>
            <Link to="/destinations" className="link-arrow">Explore Rwanda &rarr;</Link>
          </div>

          <div className="region-card">
            <img src={ugandaImg} alt="Uganda Safari" />
            <h3>Uganda</h3>
            <p>Discover the Pearl of Africa, chimpanzee tracking, and Bwindi Impenetrable Forest.</p>
            <Link to="/destinations" className="link-arrow">Explore Uganda &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Safari Highlights Gallery Section */}
      <section className="gallery-section" style={{ padding: '0 10% 80px 10%' }}>
        <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-heading)', color: 'var(--primary-color)', fontSize: '2.2rem', marginBottom: '20px' }}>
          Safari Moments & Landscapes
        </h2>
        <ImageSlider 
          images={[
            tanzaniaImg, 
            kenyaImg, 
            rwandaImg
          ]} 
        />
      </section>
    </div>
  );
}