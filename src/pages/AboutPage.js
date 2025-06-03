// src/pages/AboutPage.js
import './AboutPage.css';
import About from '../assets/About.jpeg'; // Assuming you have an about image
function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-section">
        <h1>About Little Lemon</h1>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes with a modern twist. We bring the flavors of Italy and Greece together in a warm and welcoming setting.
        </p>
        <p>
          Founded in 1995, our mission has always been to deliver fresh, delicious meals made with love and the finest local ingredients. Whether you're joining us for a casual lunch or a special dinner, we strive to make every visit memorable.
        </p>
        <p>
          Come experience the authentic tastes of the Mediterranean — right here in your neighborhood!
        </p>
          <img src={About} alt="About Little Lemon" className="about-image" />
      </section>
    </main>
  );
}

export default AboutPage;
