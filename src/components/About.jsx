import React, { useEffect, useState } from 'react';
import GrebImage from '../assets/images/greb.jpg';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const valuesContainer = document.querySelector('.values-written-container');

      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }

      if (valuesContainer) {
        const rect = valuesContainer.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setValuesVisible(isInView);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className={`about-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        {/* Main Heading */}
        <div className="about-header">
          <h2 className="about-title">About Greb Water</h2>
        </div>

        {/* Image and Subtitle Side by Side */}
        <div className="about-intro">
          <div className="about-intro-image">
            <div className="about-image-container">
              <img src={GrebImage} alt="Greb Water Facility" className="about-image" />
            </div>
          </div>
          <div className="about-intro-text">
            <h3 className="about-subtitle-heading">Our company was founded in 2022</h3>
            <p className="about-subtitle-main">
              Greb Water produces NAFDAC-registered sachet and bottled water, committed to clean, safe, and affordable drinking water across Nigeria.
            </p>
            <p className="about-subtitle-remaining">
              Guided by Hygiene, Utility, and Service, we deliver quality water to homes, retailers, offices, and bulk buyers with dependable distribution and strict quality standards.
            </p>
          </div>
        </div>

        {/* Core Values and Compliance Badge - Written Content with Vertical Lines */}
        <div className={`values-written-container ${valuesVisible ? 'visible' : ''}`}>
          <div className={`value-item-written ${valuesVisible ? 'visible' : ''}`}>
            <div className="value-icon-written">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="value-content-written">
              <h4 className="value-title-written">Hygiene</h4>
              <p className="value-description-written">
                Strict quality control and NAFDAC compliance ensure every drop is pure and safe.
              </p>
            </div>
          </div>

          <div className="vertical-divider"></div>

          <div className={`value-item-written ${valuesVisible ? 'visible' : ''}`}>
            <div className="value-icon-written">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div className="value-content-written">
              <h4 className="value-title-written">Utility</h4>
              <p className="value-description-written">
                Affordable sachet and bottled water making clean hydration accessible to everyone.
              </p>
            </div>
          </div>

          <div className="vertical-divider"></div>

          <div className={`value-item-written ${valuesVisible ? 'visible' : ''}`}>
            <div className="value-icon-written">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="value-content-written">
              <h4 className="value-title-written">Service</h4>
              <p className="value-description-written">
                Reliable distribution and prompt delivery ensuring consistent water supply.
              </p>
            </div>
          </div>

          <div className="vertical-divider"></div>

          <div className={`value-item-written ${valuesVisible ? 'visible' : ''}`}>
            <div className="value-icon-written">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="value-content-written">
              <h4 className="value-title-written">NAFDAC Registered</h4>
              <p className="value-description-written">
                Fully compliant with national standards for water quality and safety
              </p>
            </div>
          </div>
        </div>

        {/* CSR Section */}
        <div className="about-csr-block">
          <h3 className="about-csr-title">Community Commitment</h3>
          <p className="about-csr-description">
            Beyond water production, we're dedicated to empowering our community through
            youth education initiatives, digital skills training programs, and technology
            access projects. We believe in creating sustainable impact that extends
            beyond our business to nurture the next generation of leaders and innovators.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
