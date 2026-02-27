import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY;

        // When we scroll past the hero section, make navbar fixed
        if (scrollPosition > heroBottom - 100) {
          setIsFixed(true);
          setIsScrolled(true);
        } else {
          setIsFixed(false);
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isFixed ? 'fixed' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <h2 className="logo-text">Greb<span className='water'>Water</span> </h2>
          </div>

          <div className="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#products" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a href="#delivery" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('delivery'); }}>
                  Delivery
                </a>
              </li>
              {/* <li className="nav-item">
                <a href="#customer-feedback" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('customer-feedback'); }}>
                  Customer Feedback
                </a>
              </li> */}
              <li className="nav-item">
                <a href="#csr" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('csr'); }}>
                  CSR
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {/* Mobile Brand Logo */}
          <div className="mobile-brand">
            <h2 className="mobile-brand-name">Greb<span className="mobile-brand-accent">Water</span></h2>
          </div>

          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <a href="#home" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                Home
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#about" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                About
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#products" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>
                Products
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#delivery" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('delivery'); }}>
                Delivery
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#customer-feedback" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('customer-feedback'); }}>
                Customer Feedback
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#csr" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('csr'); }}>
                CSR
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#contact" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
