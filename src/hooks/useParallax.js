import { useEffect, useRef, useState } from 'react';

const useParallax = (speed = 0.5) => {
  const [offsetY, setOffsetY] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        setOffsetY(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return { elementRef, offsetY };
};

export default useParallax;
