import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/Logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
        </div>

        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/booking">Reservations</Link>
          <Link to="/order">Order Online</Link>
          <Link to="/login">Login</Link>
        </nav>

        
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
