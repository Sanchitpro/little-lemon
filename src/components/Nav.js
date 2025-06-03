// src/components/Nav.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../assets/Logo.svg'; // update path if needed

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <img src={logo} alt="Little Lemon Logo" />
      </Link>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/menu" onClick={closeMenu}>Menu</Link>
        <Link to="/booking" onClick={closeMenu}>Reserve</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'rotate1' : ''}`}></div>
        <div className={`bar ${isOpen ? 'fade' : ''}`}></div>
        <div className={`bar ${isOpen ? 'rotate2' : ''}`}></div>
      </div>
    </nav>
  );
}

export default Nav;
