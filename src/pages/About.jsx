// src/pages/About.jsx
import { Link } from 'react-router-dom';
import './About.css';
import kenyaImg from '../assets/kenya.jpg';
import camp1Img from '../assets/camp1.jpg';

export default function About() {
  return (
    <div className="about-page">
      {/* Page Header / Hero Banner */}
      <header className="page-header">
        <div className="header-overlay">
          <h1>About Mimokatours & Safaris</h1>
          <p>Your trusted bridge to the wild heart of East & Southern Africa</p>
        </div>
      </header>

      {/* Main Story Section */}
      <section className="about-content container" style={{ padding: '80px 8%' }}>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
          <div className="about-text">
            <span style={{ color: 'var(--primary-color)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
              Who We Are
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', color: 'var(--primary-color)', margin: '15px 0 25px 0' }}>
              Crafting Unforgettable African Expeditions
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
              Mimokatours and Safaris is an elite tour operator specializing in custom-curated wildlife adventures across Kenya, Tanzania, Uganda and Rwanda.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '30px' }}>
              With years of ground expertise, localized expert guides, and high-end vehicle fleets, we ensure your journey is safe, authentic, and luxurious. Whether you're tracking the Great Migration across the Mara or gorilla trekking in the misty peaks of Rwanda, we turn your dream safari into reality.
            </p>
            <Link to="/contact" className="btn-primary" style={{ display: 'inline-block' }}>Plan Your Trip With Us</Link>
          </div>
          
          <div className="about-image-wrapper" style={{ position: 'relative', height: '420px', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <img src={kenyaImg} alt="Safari Landscape" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Core Values / Why Choose Us Section */}
      <section className="why-choose-section" style={{ background: 'var(--bg-light)', padding: '80px 8%' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto' }}>
          <span style={{ color: 'var(--primary-color)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
            The Mimokatours Difference
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', color: 'var(--primary-color)', margin: '15px 0 15px 0' }}>
            Why Travel With Us
          </h2>
          <div style={{ width: '50px', height: '2px', background: 'var(--primary-color)', margin: '0 auto' }}></div>
        </div>

        <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          <div style={{ background: 'var(--white)', padding: '35px 30px', borderRadius: '10px', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--primary-color)', marginBottom: '15px' }}>
              Tailor-Made Itineraries
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              Every traveler is unique. We build bespoke packages designed entirely around your personal preferences, timeline, and budget requirements.
            </p>
          </div>

          <div style={{ background: 'var(--white)', padding: '35px 30px', borderRadius: '10px', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--primary-color)', marginBottom: '15px' }}>
              Expert Local Guides
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              Our professional multi-lingual guides possess deep-rooted knowledge of local wildlife ecosystems, tracking behaviors, and hidden gems.
            </p>
          </div>

          <div style={{ background: 'var(--white)', padding: '35px 30px', borderRadius: '10px', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--primary-color)', marginBottom: '15px' }}>
              Luxury & Comfort
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              From custom 4x4 landcruisers equipped with charging ports to handpicked luxury tented camps, your comfort and safety are our top priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Immersive Photo Quote Cards Section */}
      <section className="about-quotes-section" style={{ padding: '0 8% 80px 8%' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', color: 'var(--primary-color)' }}>
            Our Commitments to Your Journey
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          
          <div style={{ position: 'relative', height: '280px', borderRadius: '10px', overflow: 'hidden', backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${kenyaImg})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '25px', color: '#fff' }}>
            <span style={{ fontSize: '2.5rem', lineHeight: '1', fontFamily: 'serif', opacity: '0.8', marginBottom: '5px' }}>“</span>
            <p style={{ fontSize: '1rem', lineHeight: '1.5', margin: 0 }}>We offer the absolute finest safaris crafted specifically around the wonders of East Africa.</p>
          </div>

          <div style={{ position: 'relative', height: '280px', borderRadius: '10px', overflow: 'hidden', backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${camp1Img})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '25px', color: '#fff' }}>
            <span style={{ fontSize: '2.5rem', lineHeight: '1', fontFamily: 'serif', opacity: '0.8', marginBottom: '5px' }}>“</span>
            <p style={{ fontSize: '1rem', lineHeight: '1.5', margin: 0 }}>We operate with veteran field guides and dedicated ground teams rooted across East Africa.</p>
          </div>

          <div style={{ position: 'relative', height: '280px', borderRadius: '10px', overflow: 'hidden', backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${kenyaImg})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '25px', color: '#fff' }}>
            <span style={{ fontSize: '2.5rem', lineHeight: '1', fontFamily: 'serif', opacity: '0.8', marginBottom: '5px' }}>“</span>
            <p style={{ fontSize: '1rem', lineHeight: '1.5', margin: 0 }}>We partner directly with elite luxury lodges and tented camps to guarantee maximum comfort.</p>
          </div>

        </div>
      </section>

      {/* Vision & Mission Banner */}
      <section className="vision-section" style={{ padding: '0 8% 80px 8%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', height: '380px' }}>
            <img src={camp1Img} alt="Luxury Camp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', color: 'var(--primary-color)', marginBottom: '20px' }}>
              Our Mission & Commitment
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
              We are deeply committed to sustainable and responsible tourism. We believe that wildlife adventures should protect natural habitats, empower local communities, and leave positive impacts across every region we operate in.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
              When you book with Mimokatours, you aren't just taking a vacation—you are helping preserve Africa's magnificent heritage for generations to come.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}