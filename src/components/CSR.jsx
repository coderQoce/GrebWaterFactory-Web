import React, { useEffect, useRef, useState } from 'react';
import './CSR.css';

const useInView = (threshold = 0.12) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
};


const CSR = () => {
  const [headerRef, headerInView] = useInView(0.2);
  const [closingRef, closingInView] = useInView(0.2);

  return (
    <section id="csr" className="csr-section">

      {/* Hero Header with Background */}
      <div className="csr-hero">
        <div className="csr-hero-pattern" />
        <div className="csr-container">
          <div ref={headerRef} className={`csr-hero-content csr-fade ${headerInView ? 'csr-visible' : ''}`}>
            <div className="csr-hero-badge">
              <span className="csr-badge-text">Community Impact</span>
            </div>
            <h1 className="csr-hero-title">
              Our Commitment<br />
              <span className="csr-title-accent">to the Future</span>
            </h1>
            <div className="csr-hero-description">
              <p className="csr-hero-paragraph">
                Beyond water production, we look forward to building sustainable infrastructures geared towards the empowerment of children and teenagers through education and digital literacy.
              </p>
              <p className="csr-hero-paragraph">
                We believe in creating sustainable impact that extends beyond our business to nurture the next generation of leaders and innovators.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="csr-mission">
        <div className="csr-container">
          <div className="csr-mission-grid">
            <div className="csr-mission-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div className="csr-mission-content">
              <h3 className="csr-mission-title">Our Promise</h3>
              <p className="csr-mission-text">
                Every initiative we undertake is designed to create lasting, measurable change in the communities we serve, focusing on education and digital empowerment for the next generation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Quote */}
      <div className="csr-closing-section">
        <div className="csr-container">
          <div ref={closingRef} className={`csr-closing-wrapper csr-fade ${closingInView ? 'csr-visible' : ''}`}>
            <div className="csr-quote-mark">"</div>
            <blockquote className="csr-closing-quote">
              Businesses should grow <em>with</em> their communities — not apart from them.
            </blockquote>
            <div className="csr-closing-meta">
              <div className="csr-closing-signature">CEO of Greb and Sons Enterprises</div>
              <div className="csr-closing-line" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default CSR;
