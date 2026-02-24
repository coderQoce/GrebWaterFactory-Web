import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, we can stop observing
            observer.unobserve(element);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element comes into view
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return { elementRef, isVisible };
};

export default useScrollAnimation;
