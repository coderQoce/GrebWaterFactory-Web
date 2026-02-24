import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Products', href: '#products' },
    { title: 'Why Choose Us', href: '#why-us' },
    { title: 'Testimonials', href: '#testimonials' },
    { title: 'Contact', href: '#contact' }
  ];

  const products = [
    'Bottled Water',
    'Sachet Water',
    'Bulk Supply',
    'Home Delivery'
  ];

  const services = [
    'Fast Delivery',
    '24/7 Support',
    'Bulk Orders',
    'Custom Solutions'
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg viewBox="0 0 24 24" className="social-icon">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Twitter',
      icon: (
        <svg viewBox="0 0 24 24" className="social-icon">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Instagram',
      icon: (
        <svg viewBox="0 0 24 24" className="social-icon">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg viewBox="0 0 24 24" className="social-icon">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      href: '#'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h2 className="logo-text">GrebWater</h2>
              <p className="footer-tagline">
                Pure Hydration. Premium Quality.
              </p>
            </div>
            <div className="footer-description">
              <p>
                Delivering the purest water to homes and businesses with 
                uncompromising quality and exceptional service.
              </p>
            </div>
            <div className="footer-social">
              <h4 className="social-title">Follow Us</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="social-link"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href.substring(1));
                    }}
                    className="footer-link"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Products</h3>
            <ul className="footer-links">
              {products.map((product, index) => (
                <li key={index}>
                  <span className="footer-link">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="footer-link">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 GrebWater. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="#" className="bottom-link">Privacy Policy</a>
              <a href="#" className="bottom-link">Terms of Service</a>
              <a href="#" className="bottom-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-wave">
        <svg viewBox="0 0 1440 320" className="wave-svg">
          <path
            fill="rgba(15, 82, 186, 0.1)"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
