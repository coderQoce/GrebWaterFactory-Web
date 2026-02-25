import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About Us', href: '#about' },
    { title: 'Our Products', href: '#products' },
    { title: 'Contact', href: '#contact' }
  ];

  const productLinks = [
    { title: 'Bottled Water', href: '#products' },
    { title: 'Sachet Water', href: '#products' },
    { title: 'Bulk Supply', href: '#products' },
    { title: 'Home Delivery', href: '#delivery' }
  ];

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="contact-icon">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
        </svg>
      ),
      text: 'hello@grebwater.com'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="contact-icon">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
        </svg>
      ),
      text: '+234 801 234 5678'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="contact-icon">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
        </svg>
      ),
      text: 'Ibadan, Nigeria'
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '2348012345678'; // Replace with actual WhatsApp number
    const message = encodeURIComponent('Hello, I would like to make an enquiry about your products.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: (
        <svg viewBox="0 0 24 24" className="social-icon">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" fill="currentColor"/>
        </svg>
      ),
      href: '#',
      color: '#e4405f'
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg viewBox="0 0 24 24" className="social-icon">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.585 2.143 2.243-.579c.987.599 1.911.928 3.082.929 3.18 0 5.767-2.587 5.768-5.766.001-3.18-2.585-5.767-5.759-5.78zm0 10.262c-.997 0-1.795-.3-2.516-.769l-1.891.488.503-1.844c-.537-.771-.89-1.632-.89-2.64 0-2.485 2.023-4.508 4.508-4.508s4.508 2.023 4.508 4.508c0 2.485-2.023 4.508-4.508 4.508z" fill="currentColor"/>
        </svg>
      ),
      onClick: handleWhatsAppClick,
      color: '#25D366'
    }
  ];

  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Brand Section */}
          <div className="footer-section brand">
            <div className="brand-header">
              <h2 className="brand-name">Greb<span className="brand-accent">Water</span></h2>
              <div className="brand-badge">Since 2020</div>
            </div>
            <p className="brand-description">
              Premium quality water delivery service committed to purity, 
              sustainability, and customer satisfaction.
            </p>
            <div className="brand-contact">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <span className="contact-icon-wrapper">
                    {item.icon}
                  </span>
                  <span className="contact-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              {quickLinks.map((link, index) => (
                <li key={index} className="footer-item">
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href.substring(1));
                    }}
                    className="footer-link"
                  >
                    <span className="link-arrow">→</span>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h3 className="footer-heading">Our Products</h3>
            <ul className="footer-list">
              {productLinks.map((link, index) => (
                <li key={index} className="footer-item">
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href.substring(1));
                    }}
                    className="footer-link"
                  >
                    <span className="link-bullet">•</span>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="footer-section newsletter">
            <div className="social-wrapper">
              <h4 className="social-heading">Connect with us</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    onClick={social.onClick ? (e) => {
                      e.preventDefault();
                      social.onClick();
                    } : undefined}
                    className="social-link"
                    aria-label={social.name}
                    style={{ '--social-color': social.color }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="bottom-content">
            <div className="copyright">
              <p>© {new Date().getFullYear()} GrebWater. All rights reserved.</p>
            </div>
            <div className="legal-links">
              <a href="#" className="legal-link">Privacy</a>
              <span className="link-separator">•</span>
              <a href="#" className="legal-link">Terms</a>
              <span className="link-separator">•</span>
              <a href="#" className="legal-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="footer-decoration">
        <div className="decoration-dots"></div>
        <div className="decoration-line"></div>
      </div>
    </footer>
  );
};

export default Footer;