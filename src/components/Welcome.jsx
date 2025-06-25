import './welcome.css';
import { Link } from 'react-router-dom';

import image2 from '../assets/image2.png';
import image1 from '../assets/image1.png';
import rightdown from '../assets/right-down.png';
import arrowdown from '../assets/arrow-down.png';
import scribble from '../assets/scribble.png';
import logo from '../assets/logo.png';

function Welcome() {
  return (
    <section className="hero-welcome">
      {/* Decorative arrows with short phrases */}
      <img src={rightdown} className="arrow arrow-top-left" alt="arrow" />
      <div className="arrow-text arrow-text-top-left">crafted with love</div>

      <img
        src={arrowdown}
        className="arrow arrow-mid-bottom-left"
        alt="arrow"
      />
      <div className="arrow-text arrow-text-mid-bottom-left">fresh daily</div>

      <img src={scribble} className="arrow arrow-mid-low-right" alt="arrow" />
      <div className="arrow-text arrow-text-mid-low-right">parisian soul</div>
      <div className="hero-image">
        <img src={image2} alt="" />
      </div>

      <div className="hero-text">
        <h1>Welcome to Crème & Crumbs</h1>
        <h3>Your Sweet Escape</h3>
        <img src={logo} alt="logo" className="welcome-page-logo" />
        <p>
          <em>
            “At <strong>Crème & Crumbs</strong>, every pastry is a small moment
            of indulgence — elegant, handmade, unforgettable.”
          </em>
        </p>

        <Link to="/about" className="hero-button">
          Our Story
        </Link>

        <div className="hero-image2">
          <img src={image1} alt="Pistachio Cake" />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
