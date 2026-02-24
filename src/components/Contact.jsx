import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="contact-icon">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 8AM-6PM'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="contact-icon">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      title: 'Email',
      details: 'info@grebwater.com',
      description: '24/7 Support'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="contact-icon">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
      title: 'Location',
      details: '123 Water Street, Aqua City',
      description: 'Visit our facility'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider center"></div>
          <p className="section-subtitle">
            Have questions about our products or services? We'd love to hear from you
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-grid">
            <h3 className="info-title">Contact Information</h3>
            <p className="info-subtitle">
              Reach out to us through any of these channels
            </p>

            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon-wrapper">
                    {item.icon}
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-title">{item.title}</h4>
                    <p className="contact-value">{item.details}</p>
                    <p className="contact-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4 className="social-title">Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" className="social-icon">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" className="social-icon">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" className="social-icon">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" className="social-icon">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="form-container">
              <h3 className="form-title">Send us a Message</h3>
              <p className="form-subtitle">
                Fill out the form below and we'll get back to you soon
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                  <div className="input-border"></div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                  <div className="input-border"></div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-input form-textarea"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                  <div className="input-border"></div>
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="btn-content">
                      <span className="spinner"></span>
                      Sending...
                    </span>
                  ) : (
                    <span className="btn-content">
                      Send Message
                      <svg viewBox="0 0 24 24" className="btn-arrow">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    </span>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    <svg viewBox="0 0 24 24" className="success-icon">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
