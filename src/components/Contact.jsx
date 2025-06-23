import React, { useState } from 'react';
import './contact.css';
import contactIMG from '../assets/contactUs.webp';
import image2 from '../assets/image2.webp';
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
          onLoad={() => setTimeout(() => setImageLoaded(true), 300)}
        />
        <div
          className="contact-hero-text"
          style={{
            opacity: imageLoaded ? 1 : 0,

            transition: 'opacity 4s ease, transform 1.5s ease',
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

      <div className="bottom-section">
        <div className="faq-image-wrapper">
          <img src={image2} alt="FAQ Background" className="faq-small-img" />
          <div className="faq-text-overlay">
            <h2>FAQs</h2>
            <div className="faq-list compact">
              <div className="faq-item">
                <h4>Do you offer gluten-free or vegan options?</h4>
                <p>Yes! We have a variety of gluten-free and vegan pastries.</p>
              </div>
              <div className="faq-item">
                <h4>Can I reserve a table?</h4>
                <p>We don’t take reservations — just walk in!</p>
              </div>
              <div className="faq-item">
                <h4>Do you offer catering?</h4>
                <p>Absolutely! Contact us for event options.</p>
              </div>
              <div className="faq-item">
                <h4>Custom cake orders?</h4>
                <p>Yes, at least 3 days in advance.</p>
              </div>
              <div className="faq-item">
                <h4>Where can I park?</h4>
                <p>Street and nearby paid parking available.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="map-section side-map">
          <h2>Find Us on the Map</h2>
          <div className="map-container">
            <iframe
              title="Crème & Crumbs Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.010156689221!2d23.7275!3d37.9838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1234567890abcdef!2sCreme%20%26%20Crumbs!5e0!3m2!1sen!2sgr!4v0000000000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
