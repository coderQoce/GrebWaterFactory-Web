import React, { useState } from 'react';
import './CustomerFeedback.css';

const CustomerFeedback = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const feedbacks = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Restaurant Owner",
      rating: 5,
      comment: "GrebWater has been our trusted partner for over 3 years. The quality is exceptional, and their delivery service is always on time. Our customers love the pure taste!",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Office Manager",
      rating: 5,
      comment: "We switched to GrebWater for our office and the difference is remarkable. The water is crisp and clean, and the subscription service makes everything hassle-free.",
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Homeowner",
      rating: 5,
      comment: "As a family with young children, water quality is our top priority. GrebWater gives us peace of mind knowing we're serving the purest water to our kids.",
      avatar: "ER"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Fitness Trainer",
      rating: 5,
      comment: "I recommend GrebWater to all my clients. The mineral content is perfect for hydration, and the taste is unmatched. It's become essential for my training sessions.",
      avatar: "DT"
    },
    {
      id: 5,
      name: "Lisa Anderson",
      role: "Cafe Owner",
      rating: 5,
      comment: "Our customers specifically ask for GrebWater. The quality consistency and reliable delivery have helped us build a loyal customer base. Highly recommended!",
      avatar: "LA"
    }
  ];

  const nextFeedback = () => {
    setActiveIndex((prev) => (prev + 1) % feedbacks.length);
  };

  const prevFeedback = () => {
    setActiveIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  const goToFeedback = (index) => {
    setActiveIndex(index);
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
    <section id="customer-feedback" className="customer-feedback section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Customer Feedback</h2>
          <div className="section-divider center"></div>
          <p className="section-subtitle">
            Hear what our valued customers have to say about GrebWater
          </p>
        </div>

        <div className="feedback-slider">
          <div className="slider-container">
            <div className="feedback-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {feedbacks.map((feedback) => (
                <div key={feedback.id} className="feedback-item">
                  <div className="feedback-card">
                    <div className="feedback-header">
                      <div className="customer-avatar">
                        <span className="avatar-text">{feedback.avatar}</span>
                      </div>
                      <div className="customer-info">
                        <h4 className="customer-name">{feedback.name}</h4>
                        <p className="customer-role">{feedback.role}</p>
                      </div>
                      <div className="rating">
                        {renderStars(feedback.rating)}
                      </div>
                    </div>
                    
                    <div className="feedback-content">
                      <p className="feedback-comment">"{feedback.comment}"</p>
                    </div>
                    
                    <div className="feedback-footer">
                      <div className="verified-badge">
                        <svg viewBox="0 0 24 24" className="verified-icon">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span>Verified Customer</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-btn prev-btn" onClick={prevFeedback}>
            <svg viewBox="0 0 24 24" className="btn-icon">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button className="slider-btn next-btn" onClick={nextFeedback}>
            <svg viewBox="0 0 24 24" className="btn-icon">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>

        <div className="slider-dots">
          {feedbacks.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToFeedback(index)}
            />
          ))}
        </div>

        <div className="feedback-summary">
          <div className="summary-stats">
            <div className="stat-item">
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2,500+</div>
              <div className="stat-label">Reviews</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
