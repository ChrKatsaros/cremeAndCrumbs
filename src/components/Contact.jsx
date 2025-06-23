import React, { useState } from 'react';
import './contact.css';
import contactIMG from '../assets/contactUs.webp';

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from 'react-icons/fa';

function Contact() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="contact-page">
      <div className="contact-hero">
        <img
          src={contactIMG}
          alt="Contact Crème & Crumbs"
          className="contact-hero-img"
          onLoad={() => setImageLoaded(true)} // όταν φορτώσει η εικόνα
          style={{ display: 'block' }} // εξασφαλίζει ότι η εικόνα εμφανίζεται
        />
        <div
          className="contact-hero-text"
          style={{
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <h1>Visit Us</h1>
          <p>
            Indulge in sweet delights at our boutique patisserie. Come enjoy
            freshly baked treats, artisan coffee and the warmest atmosphere in
            town.
          </p>
          <div className="contact-details">
            <p>
              <strong>
                <FaMapMarkerAlt /> Address:
              </strong>{' '}
              123 Sweet Street, Paris, France
            </p>
            <p>
              <strong>
                <FaPhoneAlt /> Phone:
              </strong>{' '}
              +30 200 1234 567
            </p>
            <p>
              <strong>
                <FaEnvelope /> Email:
              </strong>{' '}
              info@cremeandcrumbs.com
            </p>
            <p>
              <strong>
                <FaClock /> Hours:
              </strong>{' '}
              Mon–Sat: 08:00–20:00 | Sun: Closed
            </p>
          </div>
        </div>
      </div>

      {/* ... το υπόλοιπο component όπως είναι ... */}
    </section>
  );
}

export default Contact;
