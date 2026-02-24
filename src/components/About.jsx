import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2 className="section-title">About GrebWater</h2>
              <div className="section-divider"></div>
            </div>
            <p className="about-description">
              Founded with a vision to deliver the purest water to every home and business,
              GrebWater has become synonymous with quality and reliability in the water industry.
            </p>
            <p className="about-description">
              Our state-of-the-art facility combines advanced purification technology with
              sustainable practices to ensure every drop meets the highest standards of purity
              and taste.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Quality Guaranteed</div>
              </div>
            </div>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" className="icon">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"
                      fill="var(--primary)" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Certified Quality</h4>
                  <p>ISO certified production facility</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" className="icon">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      fill="var(--primary)" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Trusted Brand</h4>
                  <p>Leading water provider in the region</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-container">
              <div className="water-factory">
                <svg viewBox="0 0 400 300" className="factory-svg">
                  <defs>
                    <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#E3F2FD" />
                      <stop offset="100%" stopColor="#BBDEFB" />
                    </linearGradient>
                    <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F5F5F5" />
                      <stop offset="100%" stopColor="#E0E0E0" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="200" fill="url(#skyGradient)" />
                  <rect x="50" y="120" width="80" height="120" fill="url(#buildingGradient)" />
                  <rect x="150" y="100" width="100" height="140" fill="url(#buildingGradient)" />
                  <rect x="270" y="110" width="80" height="130" fill="url(#buildingGradient)" />
                  <rect x="175" y="60" width="50" height="40" fill="var(--primary)" />
                  <circle cx="90" cy="150" r="8" fill="#90CAF9" />
                  <circle cx="90" cy="180" r="8" fill="#90CAF9" />
                  <circle cx="90" cy="210" r="8" fill="#90CAF9" />
                  <circle cx="200" cy="130" r="8" fill="#90CAF9" />
                  <circle cx="200" cy="160" r="8" fill="#90CAF9" />
                  <circle cx="200" cy="190" r="8" fill="#90CAF9" />
                  <circle cx="310" cy="140" r="8" fill="#90CAF9" />
                  <circle cx="310" cy="170" r="8" fill="#90CAF9" />
                  <circle cx="310" cy="200" r="8" fill="#90CAF9" />
                  <path d="M175,40 Q200,20 225,40" stroke="var(--primary)" strokeWidth="3" fill="none" />
                  <circle cx="200" cy="30" r="4" fill="var(--primary)" />
                </svg>
              </div>
              <div className="floating-elements">
                <div className="water-drop drop-1"></div>
                <div className="water-drop drop-2"></div>
                <div className="water-drop drop-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
