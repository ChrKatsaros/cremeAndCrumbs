import './about.css';
import React, { useEffect } from 'react';
import aboutUsHeader from '../assets/aboutUs-header.webp';

import aboutUs2 from '../assets/aboutUs2.webp'; // Decorative image
import aboutUs3 from '../assets/aboutUs3.webp';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aboutPage-wrapper">
      {/* Left Side with Layered Images */}
      <div className="aboutLeftImages">
        <img src={aboutUsHeader} alt="Header" className="headerImage" />
        <img src={aboutUs3} alt="Eggs" className="eggsImage" />
      </div>

      {/* Right Side with Text and Bottom Image */}
      <div className="aboutRightText">
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
          <img src={aboutUs2} alt="Decorative" className="decorativeImage1" />
          <img
            src={aboutUs3}
            alt="Decorative"
            className="decorativeImage2 topRight"
          />
          <img
            src={aboutUs3}
            alt="Decorative"
            className="decorativeImage2 bottomLeft"
          />
          <img
            src={aboutUs3}
            alt="Decorative"
            className="decorativeImage2 bottomRight"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
