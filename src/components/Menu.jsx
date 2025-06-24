import React from 'react';
import { Link } from 'react-scroll';
import { AiOutlineHome } from 'react-icons/ai';
import { GiCroissant, GiCupcake } from 'react-icons/gi';
import { FaCoffee } from 'react-icons/fa';
import './menu.css';

function Menu() {
  return (
    <nav className="menu-wrapper">
      {/* Σπιτάκι */}
      <Link
        to="top"
        smooth={true}
        duration={500}
        className="home-icon"
        title="Go to top"
      >
        <AiOutlineHome size={30} />
      </Link>

      {/* Baked Goods - Croissant */}
      <Link
        to="baked-goods"
        smooth={true}
        duration={500}
        className="menu-link"
        title="Baked Goods"
      >
        <span className="menu-text">Baked Goods</span>
        <GiCroissant className="menu-icon" size={30} />
      </Link>

      {/* Drinks & Coffee - Coffee icon */}
      <Link
        to="drinks-coffee"
        smooth={true}
        duration={500}
        className="menu-link"
        title="Drinks & Coffee"
      >
        <span className="menu-text">Drinks & Coffee</span>
        <FaCoffee className="menu-icon" size={30} />
      </Link>

      {/* Cakes & Sweets - Cupcake */}
      <Link
        to="cakes-sweets"
        smooth={true}
        duration={500}
        className="menu-link"
        title="Cakes & Sweets"
      >
        <span className="menu-text">Cakes & Sweets</span>
        <GiCupcake className="menu-icon" size={30} />
      </Link>
    </nav>
  );
}

export default Menu;
