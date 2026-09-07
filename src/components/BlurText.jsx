// src/components/BlurText.jsx
import { useEffect, useState } from 'react';
import './BlurText.css';

export default function BlurText({ text, delay = 100, className = '' }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const words = text.split(' ');

  return (
    <h1 className={`blur-text ${className} ${inView ? 'animate' : ''}`}>
      {words.map((word, index) => (
        <span key={index} style={{ '--word-index': index }}>
          {word}&nbsp;
        </span>
      ))}
    </h1>
  );
}