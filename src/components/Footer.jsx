import React from 'react';
import footerImg from '../assets/footerIMG.webp';
import logo from '../assets/logo.png';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import './footer.css';

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="footer" style={{ backgroundImage: `url(${footerImg})` }}>
      <div className="footer-container">
        {/* Left - Contact Form */}
        <div className="footer-section contact-form">
          <h3>Contact Us</h3>
          <form>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Your Message" required rows="3"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

        {/* Center - Logo + Store info */}
        <div className="footer-section store-info">
          <img
            src={logo}
            alt="Crème & Crumbs Logo"
            className="footer-logo"
            loading="lazy"
          />
          <h3>Our Store</h3>
          <p>123 Sweet Street, Paris, France</p>
          <p>Mon - Sat: 8am - 8pm</p>
          <p>Sun: Closed</p>
        </div>

        {/* Right - Socials */}
        <div className="footer-section socials">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©{date} Crème & Crumbs. All rights reserved. Made By C.Katsaros</p>
      </div>
    </footer>
  );
}

export default Footer;
