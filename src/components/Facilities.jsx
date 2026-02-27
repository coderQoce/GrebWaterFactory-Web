import React, { useEffect, useRef, useState } from 'react';
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
      title: "Modern Production Line",
      image: "/images/facility-1.jpg",
      category: "production"
    },
    {
      id: 2,
      title: "Quality Control Lab",
      image: "/images/facility-2.jpg",
      category: "quality"
    },
    {
      id: 3,
      title: "Packaging Department",
      image: "/images/facility-3.jpg",
      category: "packaging"
    },
    {
      id: 4,
      title: "Storage & Distribution",
      image: "/images/facility-4.jpg",
      category: "storage"
    },
    {
      id: 5,
      title: "Water Treatment Plant",
      image: "/images/facility-5.jpg",
      category: "treatment"
    },
    {
      id: 6,
      title: "Label Printing Unit",
      image: "/images/facility-6.jpg",
      category: "printing"
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
