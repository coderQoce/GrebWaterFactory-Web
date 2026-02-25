import React, { useEffect, useRef, useState } from 'react';
import DeliveryTruck from '../assets/images/BT.jpg';
import './Delivery.css';

const Delivery = () => {
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

  const deliveryFeatures = [
    {
      text: "Fast delivery within 2-4 hours"
    },
    {
      text: "Free delivery on orders above ₦10,000"
    },
    {
      text: "Real-time tracking available"
    }
  ];

  return (
    <section id="delivery" className="delivery" ref={sectionRef}>
      <div className="delivery-container">
        <div className="delivery-wrapper">
          {/* Left Column - Image */}
          <div className={`delivery-image ${isVisible ? 'visible' : ''}`}>
            <img src={DeliveryTruck} alt="Delivery Truck" />
          </div>

          {/* Right Column - Content */}
          <div className={`delivery-content ${isVisible ? 'visible' : ''}`}>
            <div className="delivery-header">
              <span className="delivery-subtitle">Premium Service</span>
              <h2 className="delivery-title">
                <span className="title-blue">Delivery</span> Service
              </h2>
            </div>

            <p className="delivery-description">
              Get your premium water delivered right to your doorstep.
              We ensure timely and safe delivery of all our products.
            </p>

            <ul className="delivery-features">
              {deliveryFeatures.map((feature, index) => (
                <li key={index} className={`feature-item ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${0.3 + index * 0.1}s` }}>
                  <svg className="check-icon" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            <button className={`delivery-btn ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '0.6s' }}>
              Schedule Delivery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;