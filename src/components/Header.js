// src/components/Header.js
import { Link } from 'react-router-dom';
import './Header.css'; // We’ll create this next
import Logo from '../assets/Logo.svg'; // Assuming you have a logo image

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Little Lemon Logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/booking">Reserve</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
