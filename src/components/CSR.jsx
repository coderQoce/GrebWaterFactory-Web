import React from 'react';
import './CSR.css';

const CSR = () => {
  const csrInitiatives = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="initiative-icon">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" 
                fill="currentColor" />
        </svg>
      ),
      title: "Education Support",
      description: "Providing educational resources and scholarships to underprivileged children in our communities"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="initiative-icon">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" 
                fill="currentColor" />
        </svg>
      ),
      title: "Digital Training",
      description: "Empowering teenagers with digital skills and technology training for future opportunities"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="initiative-icon">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" 
                fill="currentColor" />
        </svg>
      ),
      title: "Youth Empowerment",
      description: "Creating leadership programs and mentorship opportunities for young adults"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="initiative-icon">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
                fill="currentColor" />
        </svg>
      ),
      title: "Community Development",
      description: "Supporting local infrastructure and community projects that benefit children and families"
    }
  ];

  const impactStats = [
    { number: "5,000+", label: "Children Educated" },
    { number: "50+", label: "Digital Training Centers" },
    { number: "10,000+", label: "Youth Empowered" },
    { number: "25+", label: "Community Projects" }
  ];

  return (
    <section id="csr" className="csr section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">CSR & Philanthropy</h2>
          <div className="section-divider center"></div>
          <p className="section-subtitle">
            Our commitment to creating positive change in society
          </p>
        </div>

        <div className="csr-intro">
          <div className="intro-content">
            <h3 className="intro-title">Building a Better Future Together</h3>
            <p className="intro-description">
              At GrebWater, we believe that businesses have a responsibility to contribute positively to society. 
              In the next few years, we have set ambitious goals to make a meaningful impact, especially in the lives 
              of children and teenagers. Our focus areas include education, empowerment, and digital training - 
              essential pillars for building a sustainable and prosperous future.
            </p>
            <p className="intro-description">
              Through our CSR initiatives, we aim to bridge gaps, create opportunities, and empower the next generation 
              with the tools they need to succeed in an increasingly digital world.
            </p>
          </div>
        </div>

        <div className="impact-stats">
          {impactStats.map((stat, index) => (
            <div key={index} className="impact-stat">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="csr-initiatives">
          <h3 className="initiatives-title">Our Key Initiatives</h3>
          <div className="initiatives-grid">
            {csrInitiatives.map((initiative, index) => (
              <div key={index} className="initiative-card">
                <div className="initiative-icon-wrapper">
                  {initiative.icon}
                </div>
                <div className="initiative-content">
                  <h4 className="initiative-title">{initiative.title}</h4>
                  <p className="initiative-description">{initiative.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="csr-vision">
          <div className="vision-content">
            <h3 className="vision-title">Our Vision for the Future</h3>
            <div className="vision-points">
              <div className="vision-point">
                <div className="point-number">01</div>
                <div className="point-content">
                  <h4>Education for All</h4>
                  <p>Ensure every child in our communities has access to quality education and learning resources</p>
                </div>
              </div>
              <div className="vision-point">
                <div className="point-number">02</div>
                <div className="point-content">
                  <h4>Digital Literacy</h4>
                  <p>Equip teenagers with essential digital skills to thrive in the modern economy</p>
                </div>
              </div>
              <div className="vision-point">
                <div className="point-number">03</div>
                <div className="point-content">
                  <h4>Sustainable Communities</h4>
                  <p>Build self-sufficient communities through education, empowerment, and opportunity creation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="csr-cta">
          <h3 className="cta-title">Join Us in Making a Difference</h3>
          <p className="cta-description">
            Together, we can create lasting change and build a brighter future for the next generation
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">
              Partner With Us
            </button>
            <button className="btn btn-outline btn-large">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSR;
