import React, { useEffect, useState } from 'react';
import './MeetDirector.css';

const MeetDirector = () => {
  const [directorsVisible, setDirectorsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const directorsGrid = document.querySelector('.directors-grid');

      if (directorsGrid) {
        const rect = directorsGrid.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setDirectorsVisible(isInView);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const directors = [
    {
      name: "Alexander Thompson",
      title: "Director",
      bio: "With over 20 years of experience in the water industry, Alexander leads GrebWater's vision for clean, accessible water solutions, driving innovation and sustainable growth across the company."
    },
    {
      name: "Sarah Johnson",
      title: "Director",
      bio: "Sarah brings 15 years of operational excellence, optimizing our production and distribution systems to ensure efficient delivery while maintaining the highest quality standards."
    },
    {
      name: "Michael Chen",
      title: "Director",
      bio: "Michael is a water treatment specialist with 12 years of experience, developing innovative purification technologies and ensuring 100% NAFDAC compliance."
    }
  ];

  return (
    <section id="meet-director" className="meet-director section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Meet Our Directors</h2>
          <div className="section-divider center"></div>
          <p className="section-subtitle">
            Leadership with vision and commitment to excellence
          </p>
        </div>

        <div className={`directors-grid ${directorsVisible ? 'visible' : ''}`}>
          {directors.map((director, index) => (
            <React.Fragment key={index}>
              <div className={`director-card ${directorsVisible ? 'visible' : ''}`}>
                <div className="director-image">
                  <div className="director-photo">
                    <svg viewBox="0 0 300 300" className="director-avatar">
                      <defs>
                        <linearGradient id={`avatarGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#E3F2FD" />
                          <stop offset="100%" stopColor="#BBDEFB" />
                        </linearGradient>
                      </defs>
                      <circle cx="150" cy="150" r="150" fill={`url(#avatarGradient${index})`} />
                      <circle cx="150" cy="120" r="40" fill="#4682B4" />
                      <path d="M110 180 Q150 160 190 180 L190 250 Q150 270 110 250 Z" fill="#4682B4" />
                      <rect x="100" y="250" width="100" height="50" fill="#4682B4" rx="10" />
                    </svg>
                  </div>
                </div>

                <div className="director-info">
                  <h3 className="director-name">{director.name}</h3>
                  <p className="director-title">{director.title}</p>

                  <div className="director-bio">
                    <p>{director.bio}</p>
                  </div>
                </div>
              </div>
              {index < directors.length - 1 && <div className="director-divider"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetDirector;
