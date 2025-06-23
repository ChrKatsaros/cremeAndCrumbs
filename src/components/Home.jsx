import React, { useEffect, useRef, useState } from 'react';
import { Element, Link } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import Menu from './Menu';
import Sections from './Sections';
import headerVideo from '../assets/header-video.mp4';
import Welcome from './Welcome';
import WhatWeOffer from './WhatWeOffer';
import './home.css';

function Home() {
  const location = useLocation();
  const videoRef = useRef(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  // Όταν το URL αλλάξει και περιέχει #menu, σηματοδοτούμε ότι πρέπει να κάνουμε scroll
  useEffect(() => {
    if (location.hash === '#menu') {
      setShouldScroll(true);
    }
  }, [location]);

  // Όταν φορτώσει το video και το shouldScroll είναι true, κάνουμε scroll με delay
  const handleVideoLoaded = () => {
    if (shouldScroll) {
      setTimeout(() => {
        const element = document.getElementById('menu');
        if (element) {
          const yOffset = 0; // για sticky navbar
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
        setShouldScroll(false);
      }, 1500);
    }
  };

  return (
    <div className="home-page">
      {/* Άγκυρα για scroll top */}
      <Element name="top" id="top" style={{ position: 'absolute', top: 0 }} />

      <section className="header-video-container">
        <video
          ref={videoRef}
          onLoadedData={handleVideoLoaded}
          className="header-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={headerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="header-overlay">
          <div className="header-title">
            <h1>
              <span className="C">C</span>rème <span className="and">&</span>{' '}
              <span className="C">C</span>
              rumbs
            </h1>
          </div>
          <div className="header-cta">
            {/* Scroll link για smooth scroll στο menu */}
            <Link
              to="menu"
              smooth={true}
              duration={500}
              offset={0} // ίδιο offset με το scroll όταν έρχεται από hash
              className="scroll-button"
            >
              OUR MENU
            </Link>
          </div>
        </div>
      </section>

      <div className="page-container">
        <Welcome />
        <WhatWeOffer />
        <Element name="menu" id="menu">
          <Menu />
          <Sections />
        </Element>
      </div>
    </div>
  );
}

export default Home;
