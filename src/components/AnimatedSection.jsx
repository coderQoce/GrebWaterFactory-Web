import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './AnimatedSection.css';

const AnimatedSection = ({ 
  children, 
  animation = 'fade-in', 
  delay = 0, 
  threshold = 0.1,
  className = '' 
}) => {
  const { elementRef, isVisible } = useScrollAnimation(threshold);

  const animationClasses = {
    'fade-in': 'fade-in',
    'slide-in-left': 'slide-in-left',
    'slide-in-right': 'slide-in-right',
    'scale-in': 'scale-in',
    'stagger-up': 'stagger-up'
  };

  return (
    <div
      ref={elementRef}
      className={`animated-section ${animationClasses[animation] || 'fade-in'} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
