// src/pages/AboutPage.js
import './AboutSection.css';
import aboutImage from '../assets/About.jpeg'; // You must add an image here

function AboutSection() {
  return (
    <main className="about-page">
      <div className="about-image-container">
        <img src={aboutImage} alt="Little Lemon Restaurant" className="about-image" />
      </div>
      <div className="about-content">
        <h1>About Little Lemon</h1>
        <section>
          <p>
            Welcome to <strong>Little Lemon</strong> – a family-owned Mediterranean restaurant located in the heart of Chicago.
            Our mission is to bring fresh, flavorful, and authentic dishes to your table, inspired by the rich culinary traditions
            of the Mediterranean.
          </p>
          <p>
            Founded by brothers Mario and Adrian, Little Lemon prides itself on using locally-sourced ingredients, time-honored
            recipes, and a passion for hospitality. Whether you're here for a casual lunch, a romantic dinner, or a family celebration,
            we’re honored to serve you.
          </p>
          <p>
            Thank you for being a part of our story.
          </p>
        </section>
      </div>
    </main>
  );
}

export default AboutSection;
