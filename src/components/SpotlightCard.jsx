// src/components/SpotlightCard.jsx
import { useState } from 'react';
import './SpotlightCard.css';

export default function SpotlightCard({ children, className = '' }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={`spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
        '--opacity': isFocused ? 1 : 0,
      }}
    >
      <div className="spotlight-overlay" />
      <div className="spotlight-content">{children}</div>
    </div>
  );
}