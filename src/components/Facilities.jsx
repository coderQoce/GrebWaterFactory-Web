import React, { useEffect, useRef, useState } from 'react';
import Purewatermachine from '../assets/images/Purewatermachine.jpg';
import Waterfilter from '../assets/images/Waterfilter.jpg';
import BottledWaterMachine from '../assets/images/BottledWaterMachine.jpg';
import BottledWaterMachine2 from '../assets/images/BottledWaterMachine2.jpg';
import BottledWaterMachine3 from '../assets/images/BottledWaterMachine3.jpg';
import BottledWaterMachine4 from '../assets/images/BottledWaterMachine4.jpg';
import './Facilities.css';

const Facilities = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const facilities = [
    {
      id: 1,
      title: "Sachet Water Machine",
      image: Purewatermachine,
      category: "production"
    },
    {
      id: 2,
      title: "Water Filters",
      image: Waterfilter,
      category: "filtration"
    },
    {
      id: 3,
      title: "Bottled Water Machine",
      image: BottledWaterMachine,
      category: "bottling"
    },
    {
      id: 4,
      title: "Bottled Water Machine",
      image: BottledWaterMachine2,
      category: "bottling"
    },
    {
      id: 5,
      title: "Bottled Water Machine",
      image: BottledWaterMachine3,
      category: "bottling"
    },
    {
      id: 6,
      title: "Bottled Water Machine",
      image: BottledWaterMachine4,
      category: "quality"
    }
  ];
  return (
    <section id="facilities" className="facilities" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="facilities-pattern">
        <div className="pattern-circle"></div>
        <div className="pattern-circle"></div>
        <div className="pattern-circle"></div>
      </div>

      <div className="facilities-container">
        {/* Header */}
        <div className={`facilities-header ${isVisible ? 'visible' : ''}`}>
          <span className="header-tag">OUR FACILITIES</span>
          <h2 className="header-title">State-of-the-Art Infrastructure</h2>
          <p className="header-text">
            Explore our modern production facilities equipped with cutting-edge technology
            and maintained to the highest industry standards.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className={`facilities-grid ${isVisible ? 'visible' : ''}`}>
          {facilities.map((facility, index) => (
            <div
              key={facility.id}
              className={`facility-card ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="facility-image-container">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="facility-image"
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/seed/facility-${facility.id}/400/300.jpg`;
                  }}
                />
                <div className="facility-overlay">
                  <div className="facility-category">{facility.category}</div>
                </div>
              </div>
              <div className="facility-content">
                <h3 className="facility-title">{facility.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Facilities;
