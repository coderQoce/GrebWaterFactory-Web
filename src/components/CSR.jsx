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

const cards = [
  {
    num: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="csr-card-icon">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: 'Education Support',
    description: 'Providing academic resources and school support for children in underserved communities.',
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="csr-card-icon">
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 20a6.5 6.5 0 0113 0" />
        <path d="M16 11l2 2 4-4" />
      </svg>
    ),
    title: 'Youth Empowerment',
    description: 'Building skills, confidence, and real opportunity pathways for teenagers.',
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="csr-card-icon">
        <rect x="2" y="3" width="20" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h4M7 12h10" />
      </svg>
    ),
    title: 'Digital Training',
    description: 'Equipping young people with foundational tech and digital literacy skills.',
  },
];

const CSR = () => {
  const [headerRef, headerInView] = useInView(0.2);
  const [introRef, introInView] = useInView(0.1);
  const [cardsRef, cardsInView] = useInView(0.08);
  const [highlightRef, highlightInView] = useInView(0.1);
  const [closingRef, closingInView] = useInView(0.2);

  return (
    <section id="csr" className="csr-section">

      {/* Header */}
      <div className="csr-container">
        <div ref={headerRef} className={`csr-header csr-fade ${headerInView ? 'csr-visible' : ''}`}>
          <span className="csr-eyebrow">Corporate Social Responsibility</span>
          <h2 className="csr-title">Giving Back,<br /><span>Structured &amp; Sustained</span></h2>
          <p className="csr-header-sub">
            Beyond clean water  Greb Water is committed to building stronger communities,
            one initiative at a time.
          </p>
        </div>

        {/* Two-column intro */}
        <div ref={introRef} className={`csr-intro csr-fade ${introInView ? 'csr-visible' : ''}`}>
          <div className="csr-intro-left">
            <h3 className="csr-intro-heading">Why CSR matters to us</h3>
            <p className="csr-intro-text">
              Access to clean water and responsibility to communities go hand in hand.
              Under the Greb and Sons Enterprises umbrella, our CSR programmes are
              structured, purposeful, and built for lasting impact  not one-time gestures.
            </p>
            <p className="csr-intro-text">
              Our focus is deliberate: children and teenagers, because investing in
              the next generation is how businesses grow <em>with</em> their communities.
            </p>
          </div>
          <div className="csr-intro-right">
            <div className="csr-stat-block">
              <div className="csr-stat">
                <span className="csr-stat-num">3</span>
                <span className="csr-stat-label">Active Programmes</span>
              </div>
              <div className="csr-stat">
                <span className="csr-stat-num">100%</span>
                <span className="csr-stat-label">Community-Focused</span>
              </div>
              <div className="csr-stat">
                <span className="csr-stat-num">∞</span>
                <span className="csr-stat-label">Long-term Commitment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className={`csr-cards ${cardsInView ? 'csr-visible' : ''}`}>
          {cards.map((card, i) => (
            <article
              key={i}
              className="csr-card csr-fade"
              style={{ transitionDelay: `${i * 0.13}s` }}
            >
              <div className="csr-card-top">
                <span className="csr-card-num">{card.num}</span>
                <div className="csr-card-icon-wrap">{card.icon}</div>
              </div>
              <h3 className="csr-card-title">{card.title}</h3>
              <p className="csr-card-desc">{card.description}</p>
              <div className="csr-card-line" />
            </article>
          ))}
        </div>
      </div>

      {/* Full-width highlight */}
      <div ref={highlightRef} className={`csr-highlight csr-fade ${highlightInView ? 'csr-visible' : ''}`}>
        <div className="csr-highlight-inner">
          <div className="csr-highlight-text-block">
            <h2 className="csr-highlight-heading">A Structured Approach<br />to Giving Back</h2>
            <p className="csr-highlight-body">
              Our CSR is not about one-time donations. Every initiative under Greb and Sons
              Enterprises is tracked, evaluated, and improved  designed to scale alongside
              the business and deliver measurable community impact.
            </p>
          </div>
          <a href="#contact" className="csr-highlight-btn">Partner With Us</a>
        </div>
      </div>

      {/* Closing */}
      <div className="csr-container">
        <div ref={closingRef} className={`csr-closing csr-fade ${closingInView ? 'csr-visible' : ''}`}>
          <blockquote className="csr-closing-quote">
            "Businesses should grow <em>with</em> their communities  not apart from them."
          </blockquote>
          <p className="csr-closing-attr">— Greb and Sons Enterprises</p>
        </div>
      </div>

    </section>
  );
};

export default CSR;
