import React from 'react';
import { Link } from 'react-scroll';
import { AiOutlineHome } from 'react-icons/ai'; // το σπιτάκι
import './menu.css';

function Menu() {
  return (
    <nav className="menu-wrapper">
      {/* Σπιτάκι αριστερά */}
      <Link
        to="top"
        smooth={true}
        duration={500}
        className="home-icon"
        title="Go to top"
      >
        <AiOutlineHome size={28} />
      </Link>

      {/* Οι υπόλοιποι σύνδεσμοι */}
      <Link to="baked-goods" smooth={true} duration={500}>
        Baked Goods
      </Link>
      <Link to="drinks-coffee" smooth={true} duration={500}>
        Drinks & Coffee
      </Link>
      <Link to="cakes-sweets" smooth={true} duration={500}>
        Cakes & Sweets
      </Link>
    </nav>
  );
}

export default Menu;
