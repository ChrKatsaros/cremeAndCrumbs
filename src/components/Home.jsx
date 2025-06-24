import React, { useEffect, useState } from 'react';
import { Element, Link } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import Menu from './Menu';
import Sections from './Sections';
import headerVideoMobile from '../assets/header-video-mobile.mp4';
import headerVideoDesktop from '../assets/header-video-desktop.mp4';
import Welcome from './Welcome';
import WhatWeOffer from './WhatWeOffer';
import './home.css';

function Home() {
  const location = useLocation();
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
        {/* Desktop video */}
        <video
          onLoadedData={handleVideoLoaded}
          className="header-video desktop-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={headerVideoDesktop} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mobile video */}
        <video
          onLoadedData={handleVideoLoaded}
          className="header-video mobile-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={headerVideoMobile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="header-overlay">
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
