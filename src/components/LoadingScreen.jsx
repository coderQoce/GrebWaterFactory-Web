import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${!isVisible ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="water-wave">
          <svg viewBox="0 0 200 200" className="wave-svg">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M0,100 C50,80 100,120 150,100 C200,80 250,120 300,100 L300,200 L0,200 Z"
              fill="url(#waveGradient)"
              className="wave-path"
            />
            <path
              d="M0,120 C50,100 100,140 150,120 C200,100 250,140 300,120 L300,200 L0,200 Z"
              fill="url(#waveGradient)"
              className="wave-path wave-path-2"
            />
            <path
              d="M0,140 C50,120 100,160 150,140 C200,120 250,160 300,140 L300,200 L0,200 Z"
              fill="url(#waveGradient)"
              className="wave-path wave-path-3"
            />
          </svg>
        </div>
        <div className="logo">
          <h1 className="logo-text">GrebWater</h1>
        </div>
        <div className="droplet">
          <svg viewBox="0 0 100 100" className="droplet-svg">
            <path
              d="M50,10 C30,30 20,50 20,65 C20,80 35,90 50,90 C65,90 80,80 80,65 C80,50 70,30 50,10 Z"
              fill="#FFFFFF"
              opacity="0.8"
              className="droplet-path"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
