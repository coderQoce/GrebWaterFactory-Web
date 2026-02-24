import React from 'react';
import useParallax from '../hooks/useParallax';
import WaterDroplets from './WaterDroplets';
import Navbar from './Navbar';
import './Hero.css';

const Hero = () => {
  const { elementRef: wavesRef, offsetY: wavesOffset } = useParallax(0.3);
  const { elementRef: bottleRef, offsetY: bottleOffset } = useParallax(0.5);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <Navbar />
      <WaterDroplets count={15} containerHeight="100vh" />

      <div className="hero-background">
        <div ref={wavesRef} className="water-waves" style={{ transform: `translateY(${wavesOffset}px)` }}>
          <svg viewBox="0 0 1440 320" className="wave wave-1">
            <path
              fill="rgba(15, 82, 186, 0.1)"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg viewBox="0 0 1440 320" className="wave wave-2">
            <path
              fill="rgba(15, 82, 186, 0.05)"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg viewBox="0 0 1440 320" className="wave wave-3">
            <path
              fill="rgba(15, 82, 186, 0.02)"
              fillOpacity="1"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="floating-drops">
          <div className="drop drop-1"></div>
          <div className="drop drop-2"></div>
          <div className="drop drop-3"></div>
          <div className="drop drop-4"></div>
          <div className="drop drop-5"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <div className="water-bottle">
              Pure Hydration.
              <br />
              Premium Quality.
            </div>
            <p className="hero-subtitle">
              Experience the refreshing taste of GrebWater - where purity meets excellence.
              Our premium water is sourced from natural springs and delivered with uncompromising quality.
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn-primary btn-large"
                onClick={() => scrollToSection('contact')}
              >
                Order Now
              </button>
              <button
                className="btn btn-outline btn-large"
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </button>
            </div>
          </div>
          <div ref={bottleRef} className="hero-image fade-in" style={{ transform: `translateY(${bottleOffset}px)` }}>
            <div className="water-bottle">
              <svg viewBox="0 0 200 400" className="bottle-svg">
                <defs>
                  <linearGradient id="bottleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E3F2FD" />
                    <stop offset="50%" stopColor="#BBDEFB" />
                    <stop offset="100%" stopColor="#90CAF9" />
                  </linearGradient>
                  <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0F52BA" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#0F52BA" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                <rect x="60" y="20" width="80" height="40" fill="url(#bottleGradient)" rx="5" />
                <rect x="70" y="10" width="60" height="20" fill="#0F52BA" rx="3" />
                <path d="M60,60 L60,350 Q60,380 90,380 L110,380 Q140,380 140,350 L140,60"
                  fill="url(#bottleGradient)" stroke="#0F52BA" strokeWidth="2" />
                <path d="M70,150 Q100,140 130,150 L130,340 Q100,350 70,340 Z"
                  fill="url(#waterGradient)" opacity="0.8" />
                <ellipse cx="100" cy="60" rx="40" ry="8" fill="#0F52BA" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
