import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link for default mail app
    const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `---\n` +
      `This message was sent from the GrebWater contact form.`
    );

    const mailtoUrl = `mailto:grebwater@gmail.com?subject=${subject}&body=${body}`;

    // Open default mail app
    window.location.href = mailtoUrl;

    // Show success message and reset form
    setSubmitStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(''), 3000);
  };

  const contactMethods = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="method-icon">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
        </svg>
      ),
      label: "Email Us",
      value: "grebwater@gmail.com",
      action: "Send email"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="method-icon">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor" />
        </svg>
      ),
      label: "Call Us",
      value: "+234 906 498 2269",
      action: "Request call"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="method-icon">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor" />
        </svg>
      ),
      label: "Alternative Line",
      value: "+234 915 770 7558",
      action: "Request call"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="method-icon">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
        </svg>
      ),
      label: "Visit Us",
      value: "Ibadan, Nigeria",
      action: "Get directions"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <span className="header-tag">CONTACT</span>
          <h2 className="header-title">Get in Touch</h2>
          <p className="header-text">
            Have questions about our products or services? We're here to help.
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <h3 className="info-heading">Let's talk about your needs</h3>
              <p className="info-text">
                Whether you need bulk orders, custom solutions, or just have questions,
                our team is ready to assist you.
              </p>

              <div className="methods-list">
                {contactMethods.map((method, index) => (
                  <div key={index} className="method-item">
                    <div className="method-icon-wrapper">
                      {method.icon}
                    </div>
                    <div className="method-details">
                      <span className="method-label">{method.label}</span>
                      <span className="method-value">{method.value}</span>
                      <button className="method-action">{method.action} →</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form">
            <div className="form-card">
              <h3 className="form-heading">Send us a message</h3>
              <p className="form-text">
                Fill in the details below and we'll respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="form-fields">
                <div className="field-group">
                  <label htmlFor="name" className="field-label">Full name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="John Doe"
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="email" className="field-label">Email address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="phone" className="field-label">Phone number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="+234 810 797 7077"
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="message" className="field-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="field-input field-textarea"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="button-content">
                      <span className="spinner"></span>
                      Sending...
                    </span>
                  ) : (
                    <span className="button-content">
                      Send message
                      <svg viewBox="0 0 24 24" className="button-arrow">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" fill="currentColor" />
                      </svg>
                    </span>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    <svg viewBox="0 0 24 24" className="success-icon">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor" />
                    </svg>
                    Message sent successfully!
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