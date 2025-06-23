import './about.css';
import React, { useEffect, useState } from 'react';
import aboutUsHeader from '../assets/aboutUs-header.webp';
import aboutUs2 from '../assets/aboutUs2.webp';
import aboutUs3 from '../assets/aboutUs3.webp';

function About() {
  const [imagesLoaded, setImagesLoaded] = useState({
    header: false,
    aboutUs2: false,
    aboutUs3_1: false,
    aboutUs3_2: false,
    aboutUs3_3: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // helper to check if όλα έχουν φορτώσει
  const allLoaded = Object.values(imagesLoaded).every(Boolean);

  // handlers για κάθε εικόνα
  const handleImageLoad = (key) => {
    setImagesLoaded((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div className="aboutPage-wrapper">
      {/* Left Side with Layered Images */}
      <div className="aboutLeftImages">
        <img
          src={aboutUsHeader}
          alt="Header"
          className="headerImage"
          onLoad={() => handleImageLoad('header')}
        />
        <img
          src={aboutUs3}
          alt="Eggs"
          className="eggsImage"
          onLoad={() => handleImageLoad('aboutUs3_1')}
        />
      </div>

      {/* Right Side with Text and Bottom Image */}
      <div
        className="aboutRightText"
        style={{
          opacity: allLoaded ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}
      >
        <h1>Over 60 Years of Making Butter</h1>
        <p>
          Since our humble beginnings over six decades ago in a small kitchen,
          we have dedicated ourselves to the art of crafting the finest butter.
          Combining time-honored traditions with modern techniques, our passion
          for excellence shines through in every batch we create.
          <br />
          <br />
          We pride ourselves on delivering rich, creamy, and unforgettable
          flavors that bring joy to every table.
        </p>
        <div className="decorativeImageWrapper">
          <img
            src={aboutUs2}
            alt="Decorative"
            className="decorativeImage1"
            onLoad={() => handleImageLoad('aboutUs2')}
          />
          <img
            src={aboutUs3}
            alt="Decorative"
            className="decorativeImage2 topRight"
            onLoad={() => handleImageLoad('aboutUs3_2')}
          />
          <img
            src={aboutUs3}
            alt="Decorative"
            className="decorativeImage2 bottomLeft"
            onLoad={() => handleImageLoad('aboutUs3_3')}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
