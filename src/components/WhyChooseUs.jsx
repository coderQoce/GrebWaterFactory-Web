import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Certified Quality',
      description: 'ISO 9001 certified production with rigorous quality control at every stage',
      icon: (
        <svg viewBox="0 0 24 24" className="feature-icon">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"
            fill="currentColor" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Fast Delivery',
      description: 'Same-day delivery service available for all orders within our service area',
      icon: (
        <svg viewBox="0 0 24 24" className="feature-icon">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
            fill="currentColor" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Affordable Pricing',
      description: 'Competitive pricing with bulk discounts and flexible payment options',
      icon: (
        <svg viewBox="0 0 24 24" className="feature-icon">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
            fill="currentColor" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Eco-Friendly Packaging',
      description: 'Sustainable and recyclable packaging solutions to protect our environment',
      icon: (
        <svg viewBox="0 0 24 24" className="feature-icon">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            fill="currentColor" />
        </svg>
      )
    },
    {
      id: 5,
      title: '24/7 Customer Support',
      description: 'Round-the-clock customer service to assist with all your water needs',
      icon: (
        <svg viewBox="0 0 24 24" className="feature-icon">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
            fill="currentColor" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Advanced Filtration',
      description: 'State-of-the-art multi-stage filtration process ensuring maximum purity',
      icon: (
        <svg viewBox="0 0 24 24" className="feature-icon">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
            fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-us" className="why-choose-us section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Why Choose GrebWater</h2>
          <div className="section-divider center"></div>
          <p className="section-subtitle">
            We combine quality, reliability, and innovation to deliver the best water solutions
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="feature-item"
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Experience Premium Water?</h3>
            <p className="cta-subtitle">
              Join thousands of satisfied customers who trust GrebWater for their hydration needs
            </p>
            <button className="btn btn-primary btn-large cta-btn">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
