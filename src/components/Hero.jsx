import React from 'react';
import Navbar from './Navbar';
import BTImage from '../assets/images/BT.jpg';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <Navbar />

      <div className="hero-background">
        <div className="water-waves">
          <svg viewBox="0 0 1440 320" className="wave wave-1">
            <path
              fill="rgba(255, 255, 255, 0.3)"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg viewBox="0 0 1440 320" className="wave wave-2">
            <path
              fill="rgba(255, 255, 255, 0.2)"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg viewBox="0 0 1440 320" className="wave wave-3">
            <path
              fill="rgba(255, 255, 255, 0.1)"
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
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-clean">Clean</span>
              <br />
              <span className="title-hygienic">Hygienic &</span>
              <br />
              <span className="title-portable">Portable Water</span>
            </h1>
            <p className="hero-subtitle">
              A division of Greb and Sons Enterprises Limited we provide long-lasting solutions to one of humanity's greatest needs — clean and hygienic potable water.
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn-outline btn-large"
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="water-bottle">
              <img src={BTImage} alt="GrebWater Bottle" className="bottle-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
