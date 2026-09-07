// src/components/ImageSlider.jsx
import { useState, useEffect, useCallback } from 'react';
import './ImageSlider.css';

export default function ImageSlider({ images = [], autoPlay = true, autoPlayInterval = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Auto-play timer effect
  useEffect(() => {
    if (!autoPlay || images.length === 0) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, images.length, nextSlide]);

  if (!images.length) return null;

  return (
    <div className="image-slider-container">
      <div 
        className="slider-track" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="slide" key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <button className="slider-btn prev" onClick={prevSlide}>&#10094;</button>
      <button className="slider-btn next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
}