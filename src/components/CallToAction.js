// src/components/CallToAction.js
import { Link } from 'react-router-dom';
import './CallToAction.css';
import Head from '../assets/Head.jpeg'

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-text">
        <h1>Welcome to Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We serve Mediterranean dishes, fresh and delicious, all made with locally sourced ingredients.</p>
        <Link to="/booking">
          <button className="cta-button">Reserve a Table</button>
        </Link>
      </div>
      <div className="cta-image">
        <img src={Head} alt="Delicious Mediterranean food" className="cta-image" />
      </div>
    </section>
  );
}

export default CallToAction;
