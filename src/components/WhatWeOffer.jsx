import './whatWeOffer.css';
import { Link } from 'react-scroll';
import wwo1 from '../assets/wwo1.png';
import wwo2 from '../assets/wwo2.png';
import wwo3 from '../assets/wwo3.png';
import scribble from '../assets/scribble.png';

function WhatWeOffer() {
  return (
    <div className="whatWeOffer-container">
      <div className="whaWeOffer-header">
        <img src={scribble} alt="artisan croissant" />
        <div className="whaWeOffer-header-content">
          <h1>What We Offer</h1>
          <p className="subtitle">
            Discover our exquisite range of freshly baked delights crafted with
            love.
          </p>
        </div>
      </div>

      <div></div>
      <div className="whatWeOffer-layer">
        <div className="whatWeOfferIMG small">
          <img src={wwo1} alt="artisan croissant" />
        </div>
        <div className="whatWeOfferText">
          <h2>Tradition</h2>
          <h1>Artisan Croissants</h1>
          <p>
            Golden, flaky, and made with traditional French techniques — each
            croissant is a labor of love, crafted to bring you the authentic
            taste of Parisian mornings.
          </p>
          <Link
            to="baked-goods"
            smooth={true}
            duration={500}
            className="scroll-link-button"
          >
            See on Menu
          </Link>
        </div>
      </div>

      <div className="whatWeOffer-layer">
        <div className="whatWeOfferText">
          <h2>Elegance</h2>
          <h1>Deluxe Pastries</h1>
          <p>
            Indulge in our exquisite selection of delicate pastries — from silky
            éclairs to crisp mille-feuille, all handcrafted with the finest
            ingredients and passion.
          </p>
          <Link
            to="cakes-sweets"
            smooth={true}
            duration={500}
            className="scroll-link-button"
          >
            See on Menu
          </Link>
        </div>
        <div className="whatWeOfferIMG">
          <img src={wwo2} alt="deluxe pastry" />
        </div>
      </div>

      <div className="whatWeOffer-layer">
        <div className="whatWeOfferIMG large">
          <img src={wwo3} alt="signature cake" />
        </div>
        <div className="whatWeOfferText">
          <h2>Signature</h2>
          <h1>Signature Cakes</h1>
          <p>
            Discover our signature cakes, uniquely designed to impress with
            stunning presentation and rich, unforgettable flavors — perfect for
            any special occasion.
          </p>
          <Link
            to="cakes-sweets"
            smooth={true}
            duration={500}
            className="scroll-link-button"
          >
            See on Menu
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WhatWeOffer;
