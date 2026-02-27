import React, { useEffect, useRef, useState } from 'react';
import SachetImage from '../assets/images/BT4.jpg';
import BottledImage from '../assets/images/BT2.jpg';
import BottleProductionImage from '../assets/images/BT3.jpg';
import LabelMakerImage from '../assets/images/BT1.jpg';
import './Products.css';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');
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

  // Additional observers for different sections
  useEffect(() => {
    if (!isVisible) return;

    // Animate header
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    // Animate filter bar
    const filterObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    // Animate CTA
    const ctaObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    const header = document.querySelector('.products-header');
    const filter = document.querySelector('.filter-wrapper');
    const cta = document.querySelector('.products-cta');

    if (header) headerObserver.observe(header);
    if (filter) filterObserver.observe(filter);
    if (cta) ctaObserver.observe(cta);

    return () => {
      if (header) headerObserver.unobserve(header);
      if (filter) filterObserver.unobserve(filter);
      if (cta) ctaObserver.unobserve(cta);
    };
  }, [isVisible]);

  const products = [
    {
      id: 1,
      name: 'Sachet Water',
      category: 'sachet',
      description: 'Pure refreshment in every sip',
      fullDescription: 'Convenient 50cl sachets perfect for events, offices, and everyday hydration. Our sachets are produced under strict quality controls.',
      image: SachetImage,
      specs: ['50cl volume', 'Food-grade material', '20 sachets/pack'],

    },
    {
      id: 2,
      name: 'Premium Bottled',
      category: 'bottled',
      description: 'Crystal clear bottled water',
      fullDescription: 'Premium quality water in BPA-free bottles. Available in 75cl  for your daily hydration needs.',
      image: BottledImage,
      specs: ['75cl', 'BPA-free', 'Recyclable'],

    },
    {
      id: 3,
      name: 'Bottle Manufacturing',
      category: 'manufacturing',
      description: 'Custom bottle production',
      fullDescription: 'End-to-end bottle manufacturing services for businesses. We create custom designs with premium quality materials.',
      image: BottleProductionImage,
      specs: ['Custom molds', 'Bulk orders', 'Quality certified'],

    },
    {
      id: 4,
      name: 'Label Designing',
      category: 'labels',
      description: 'Professional label printing',
      fullDescription: 'Stand out with our custom label design and printing services. We create eye-catching designs that tell your brand story.',
      image: LabelMakerImage,
      specs: ['Custom designs', 'Waterproof', 'Bulk printing'],

    }
  ];

  const filters = [
    { value: 'all', label: 'All Products' },
    { value: 'sachet', label: 'Sachet' },
    { value: 'bottled', label: 'Bottled' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'labels', label: 'Labels' }
  ];

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(product => product.category === activeFilter);

  const handleInquiry = (productName) => {
    const phoneNumber = '2348107977077';
    const message = encodeURIComponent(`Hello, I'm interested in your ${productName}. Please provide more information.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="products" className="products" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="products-pattern">
        <div className="pattern-circle"></div>
        <div className="pattern-circle"></div>
        <div className="pattern-circle"></div>
      </div>

      <div className="products-container">
        {/* Section Header */}
        <div className="products-header">
          <span className="products-subtitle">What We Offer</span>
          <h2 className="products-title">
            Premium Water Solutions
            <span className="title-accent">For Every Need</span>
          </h2>
          <p className="products-description">
            From refreshing sachets to custom manufacturing, we provide comprehensive water solutions
            that meet the highest standards of quality and purity.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="filter-wrapper">
          <div className="filter-bar">
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="filter-indicator"></div>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`product-card ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Card Badge */}
              {product.badge && (
                <div className="card-badge">
                  <span>{product.badge}</span>
                </div>
              )}

              {/* Card Icon/Emoji */}
              <div className="card-icon-wrapper">
                <span className="card-emoji">{product.icon}</span>
              </div>

              {/* Card Image */}
              <div className="card-image">
                <img src={product.image} alt={product.name} />
                <div className="image-overlay"></div>
              </div>

              {/* Card Content */}
              <div className="card-content">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-description">{product.description}</p>

                {/* Expandable Details */}
                <div className="card-details">
                  <p className="full-description">{product.fullDescription}</p>

                  <div className="specs-list">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="spec-item">
                        <span className="spec-dot">●</span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="card-footer">
                    <span className="product-price">{product.price}</span>
                    <button
                      className="inquiry-btn"
                      onClick={() => handleInquiry(product.name)}
                    >
                      <span>Inquire Now</span>
                      <svg viewBox="0 0 24 24" className="btn-icon">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="products-cta">
          <div className="cta-content">
            <h3>Need Custom Solutions?</h3>
            <p>We offer tailored water solutions for businesses, events, and organizations</p>
            <button className="cta-btn" onClick={() => handleInquiry('custom solutions')}>
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;