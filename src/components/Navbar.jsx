import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaFacebookF, FaPhoneAlt } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import './navbar.css';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`navbar ${isHome ? 'home-navbar' : 'default-navbar'} ${
          isAbout ? 'about-navbar' : ''
        }`}
      >
        {/* Hamburger icon for mobile */}
        <div className="mobile-hamburger" onClick={handleToggleMenu}>
          <FaBars size={24} color="white" />
        </div>

        {/* Desktop navigation */}
        <div className="nav-HAM desktop-only">
          <a href="/">Home</a>
          <a href="/about">About</a>
          {isHome ? (
            <Link to="menu" smooth={true} duration={500}>
              Menu
            </Link>
          ) : (
            <a href="/#menu">Menu</a>
          )}
        </div>

        {/* Contact button */}
        <div className="nav-C">
          <a href="/contact">Contact</a>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="close-icon" onClick={closeMenu}>
          <FaTimes size={24} color="white" />
        </div>

        <a href="/" onClick={closeMenu}>
          Home
        </a>
        <a href="/about" onClick={closeMenu}>
          About
        </a>
        <a href="/#menu" onClick={closeMenu}>
          Menu
        </a>

        {/* Social icons */}
        <div className="mobile-socials">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={35} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={35} />
          </a>
          <a href="tel:+1234567890">
            <FaPhoneAlt size={35} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
