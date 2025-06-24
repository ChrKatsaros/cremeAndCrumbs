import './about.css';
import React, { useEffect } from 'react';

import about2 from '../assets/about2.webp';
import logo from '../assets/logo.png';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="about-container">
        {/* Left side: logo, title and paragraph */}
        <div className="about-left">
          <img src={logo} alt="Logo" className="about-logo" />
          <h1 className="about-title">Our Story</h1>
          <p className="about-description">
            Our story began not in a factory, but in a warm kitchen where the
            scent of melting butter told its own tale. With every batch, we
            honor the hands and hearts that came before us — blending tradition,
            time, and just a touch of magic.
          </p>
        </div>

        {/* Right side: one large image */}
        <div className="about-right">
          <div className="about-images-wrapper">
            <img src={about2} alt="Main" className="about-img-large" />
          </div>
        </div>
      </div>

      {/* Footer signature */}
      {/* Footer signature with quote style */}
      <div className="about-footer">
        <p className="footer-text">“making butter since 1961”</p>
      </div>
    </>
  );
}

export default About;
