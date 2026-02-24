import React, { useEffect, useRef } from 'react';
import './WaterDroplets.css';

const WaterDroplets = ({ count = 20, containerHeight = '100vh' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create droplets dynamically
    const droplets = [];
    for (let i = 0; i < count; i++) {
      const droplet = document.createElement('div');
      droplet.className = 'water-droplet';
      
      // Random properties for each droplet
      const size = Math.random() * 15 + 5; // 5-20px
      const left = Math.random() * 100; // 0-100%
      const animationDuration = Math.random() * 10 + 5; // 5-15s
      const animationDelay = Math.random() * 5; // 0-5s
      const opacity = Math.random() * 0.5 + 0.3; // 0.3-0.8
      
      droplet.style.setProperty('--size', `${size}px`);
      droplet.style.setProperty('--left', `${left}%`);
      droplet.style.setProperty('--duration', `${animationDuration}s`);
      droplet.style.setProperty('--delay', `${animationDelay}s`);
      droplet.style.setProperty('--opacity', opacity);
      
      container.appendChild(droplet);
      droplets.push(droplet);
    }

    return () => {
      // Cleanup droplets
      droplets.forEach(droplet => {
        if (container.contains(droplet)) {
          container.removeChild(droplet);
        }
      });
    };
  }, [count]);

  return (
    <div 
      ref={containerRef} 
      className="water-droplets-container"
      style={{ height: containerHeight }}
    />
  );
};

export default WaterDroplets;
