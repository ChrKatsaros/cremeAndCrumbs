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
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (location.hash === '#menu') {
      setShouldScroll(true);
    }
  }, [location]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);

    if (shouldScroll) {
      setTimeout(() => {
        const element = document.getElementById('menu');
        if (element) {
          const yOffset = 0;
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
          {/* Απόκρυψη / εμφάνιση h1 και button μέχρι να φορτώσει το video */}
          <div
            className="header-title"
            style={{
              opacity: videoLoaded ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          >
            <h1>
              <span className="C">C</span>rème <span className="and">&</span>{' '}
              <span className="C">C</span>rumbs
            </h1>
          </div>
          <div
            className="header-cta"
            style={{
              opacity: videoLoaded ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          >
            <Link
              to="menu"
              smooth={true}
              duration={500}
              offset={0}
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
