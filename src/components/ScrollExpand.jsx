import React, { useState, useEffect, useRef } from 'react';
import './ScrollExpand.css';

export default function ScrollExpand({
  src,
  alt = 'Media preview',
  title,
  scrollHint,
  useWindowScroll = false,
  mediaZoom = 1,
  startWidth = 45,
  startHeight = 60,
  startRadius = 24,
  endRadius = 0,
  scrollDistance = 1,
  holdDistance = 0.3,
  smoothing = 0.1,
  overlayScrim = 0.4,
  enabled = true,
  children
}) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setProgress(1);
      return;
    }

    const handleScroll = () => {
      const element = containerRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on how far the element has scrolled through the viewport
      const totalDist = windowHeight * scrollDistance;
      const elementTop = rect.top;
      
      // Raw progress calculation
      let p = (windowHeight - elementTop) / totalDist;
      p = Math.max(0, Math.min(1, p)); // Clamp between 0 and 1

      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [enabled, scrollDistance]);

  // Interpolate styles based on scroll progress
  const currentWidth = startWidth + (100 - startWidth) * progress;
  const currentHeight = startHeight + (100 - startHeight) * progress;
  const currentRadius = startRadius - (startRadius - endRadius) * progress;
  const currentZoom = 1 + (mediaZoom - 1) * progress;
  const currentScrim = overlayScrim * (1 - progress * 0.5);

  return (
    <div 
      ref={containerRef} 
      className={`scroll-expand-wrapper ${enabled ? 'enabled' : 'disabled'}`}
      style={{
        height: enabled ? `${Math.max(100, scrollDistance * 100)}vh` : 'auto'
      }}
    >
      <div className="scroll-expand-sticky">
        {/* Optional text header/content above or inside frame */}
        {children && <div className="scroll-expand-header">{children}</div>}

        <div 
          className="scroll-expand-frame"
          style={{
            width: enabled ? `${currentWidth}%` : '100%',
            height: enabled ? `${currentHeight}vh` : '500px',
            borderRadius: `${currentRadius}px`,
          }}
        >
          <div 
            className="scroll-expand-media-container"
            style={{ transform: `scale(${currentZoom})` }}
          >
            <img src={src} alt={alt} className="scroll-expand-image" />
          </div>

          <div 
            className="scroll-expand-scrim" 
            style={{ backgroundColor: `rgba(0, 0, 0, ${currentScrim})` }}
          />

          {title && (
            <div className="scroll-expand-title" style={{ opacity: Math.max(0, 1 - progress * 1.5) }}>
              {title}
            </div>
          )}

          {scrollHint && progress < 0.1 && (
            <div className="scroll-expand-hint">
              <span>{scrollHint}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}