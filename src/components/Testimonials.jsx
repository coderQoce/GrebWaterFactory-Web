import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Restaurant Owner',
      content: 'GrebWater has been our trusted water supplier for over 3 years. The quality is consistently excellent, and their delivery service is always on time. Highly recommended!',
      rating: 5,
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Office Manager',
      content: 'We switched to GrebWater for our office needs and couldn\'t be happier. The bulk supply options are cost-effective, and the water quality is superior to anything we\'ve tried before.',
      rating: 5,
      avatar: 'MC'
    },
    {
      id: 3,
      name: 'Emma Williams',
      role: 'Homeowner',
      content: 'The home delivery service is fantastic! Fresh, clean water delivered right to our doorstep every week. The subscription plans are flexible and affordable.',
      rating: 5,
      avatar: 'EW'
    },
    {
      id: 4,
      name: 'David Martinez',
      role: 'Event Coordinator',
      content: 'We use GrebWater for all our events. Their sachet water is perfect for large gatherings, and the team always ensures we have enough supply. Great customer service!',
      rating: 5,
      avatar: 'DM'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Gym Owner',
      content: 'Our gym members love the quality of GrebWater. The bottled water is always fresh, and the bulk delivery options help us keep our hydration stations stocked.',
      rating: 5,
      avatar: 'LT'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        viewBox="0 0 24 24"
        className={`star ${index < rating ? 'filled' : 'empty'}`}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="section-divider center"></div>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="testimonials-slider">
          <div className="slider-container">
            <div
              className="slides-wrapper"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-slide">
                  <div className="testimonial-content">
                    <div className="testimonial-header">
                      <div className="avatar">
                        <span className="avatar-text">{testimonial.avatar}</span>
                      </div>
                      <div className="testimonial-info">
                        <h4 className="customer-name">{testimonial.name}</h4>
                        <p className="customer-role">{testimonial.role}</p>
                        <div className="rating">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-text">
                      <p className="quote">"{testimonial.content}"</p>
                    </div>
                    <div className="quote-icon">
                      <svg viewBox="0 0 24 24" className="quote-svg">
                        <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.473-.197-.485-1.938-.597.144c-.19.048-.411.108-.654.173-.244.05-.5.165-.78.26-.28.107-.579.197-.876.34-.29.155-.617.28-.916.49-.313.197-.639.38-.935.629-.313.232-.6.48-.876.747-.267.28-.511.56-.729.847-.232.277-.434.57-.603.86-.179.28-.322.569-.46.847-.134.28-.244.55-.35.814-.104.267-.19.523-.267.77-.16.492-.265.936-.329 1.301C1.078 9.247 1 9.5 1 9.5L1 10c0 1.1.9 2 2 2h.5c.28 0 .5-.22.5-.5 0-.15-.06-.28-.15-.37C3.12 10.74 3 10.39 3 10c0-.17.03-.33.07-.49.03-.17.1-.34.07-.49 0-.01.01-.02.01-.03.01-.1.04-.2.07-.29.03-.09.09-.19.13-.29.04-.1.1-.19.15-.28.05-.09.12-.17.18-.25.07-.09.13-.16.2-.23.07-.07.15-.13.22-.19.08-.07.15-.13.23-.18.08-.06.16-.1.24-.15.08-.05.16-.09.24-.13.08-.04.16-.07.24-.1.08-.03.16-.06.24-.08.08-.02.16-.04.24-.05.08-.01.16-.02.24-.03.08-.01.16-.01.24-.01.08 0 .16 0 .24.01.08.01.16.02.24.03.08.01.16.03.24.05.08.02.16.05.24.08.08.03.16.06.24.1.08.04.16.08.24.13.08.05.16.09.24.15.08.06.15.12.23.18.08.07.15.13.22.19.07.07.13.15.2.23.06.08.13.16.18.25.05.09.11.18.15.28.04.1.1.19.13.29.03.1.06.19.07.29 0 .01.01.02.01.03.03.15.04.32.07.49.04.16.07.32.07.49 0 .39-.12.74-.35 1.13-.09.09-.15.22-.15.37 0 .28.22.5.5.5H6.5zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.473-.197-.485-1.938-.597.144c-.19.048-.411.108-.654.173-.244.05-.5.165-.78.26-.28.107-.579.197-.876.34-.29.155-.617.28-.916.49-.313.197-.639.38-.935.629-.313.232-.6.48-.876.747-.267.28-.511.56-.729.847-.232.277-.434.57-.603.86-.179.28-.322.569-.46.847-.134.28-.244.55-.35.814-.104.267-.19.523-.267.77-.16.492-.265.936-.329 1.301-.07.363-.148.616-.148.616L14 10c0 1.1.9 2 2 2h.5c.28 0 .5-.22.5-.5 0-.15-.06-.28-.15-.37-.23-.39-.35-.74-.35-1.13 0-.17.03-.33.07-.49.03-.17.1-.34.07-.49 0-.01.01-.02.01-.03.01-.1.04-.2.07-.29.03-.09.09-.19.13-.29.04-.1.1-.19.15-.28.05-.09.12-.17.18-.25.07-.09.13-.16.2-.23.07-.07.15-.13.22-.19.08-.07.15-.13.23-.18.08-.06.16-.1.24-.15.08-.05.16-.09.24-.13.08-.04.16-.07.24-.1.08-.03.16-.06.24-.08.08-.02.16-.04.24-.05.08-.01.16-.02.24-.03.08-.01.16-.01.24-.01.08 0 .16 0 .24.01.08.01.16.02.24.03.08.01.16.03.24.05.08.02.16.05.24.08.08.03.16.06.24.1.08.04.16.08.24.13.08.05.16.09.24.15.08.06.15.12.23.18.08.07.15.13.22.19.07.07.13.15.2.23.06.08.13.16.18.25.05.09.11.18.15.28.04.1.1.19.13.29.03.1.06.19.07.29 0 .01.01.02.01.03.03.15.04.32.07.49.04.16.07.32.07.49 0 .39-.12.74-.35 1.13-.09.09-.15.22-.15.37 0 .28.22.5.5.5H17.5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-btn prev-btn" onClick={prevSlide}>
            <svg viewBox="0 0 24 24" className="btn-icon">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button className="slider-btn next-btn" onClick={nextSlide}>
            <svg viewBox="0 0 24 24" className="btn-icon">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>

          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
