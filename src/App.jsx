// src/App.jsx
//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import TourDetail from './pages/TourDetail';
import About from './pages/About';
import Contact from './pages/Contact';

// Import the floating action widget
import FloatingActionWidget from './components/FloatingActionWidget';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/tour/:id" element={<TourDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      {/* Floating action widget placed here to appear globally across all pages */}
      <FloatingActionWidget />
    </Router>
  );
}