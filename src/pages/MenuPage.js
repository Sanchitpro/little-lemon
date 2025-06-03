import './MenuPage.css';
import Greek from '../assets/greek salad.jpg';
import Bruschetta  from '../assets/bruchetta.svg';
import LemonDessert from '../assets/lemon dessert.jpg';
function MenuPage() {
  return (
    <main className="menu-page">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        <div className="menu-item">
        <img src={Greek} alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <p>Fresh lettuce, tomatoes, feta cheese, and olives.</p>
          <span>$12.99</span>
        </div>
        <div className="menu-item">
          <img src={Bruschetta} alt="Bruschetta" />
          <h3>Bruschetta</h3>
          <p>Grilled bread topped with garlic, tomatoes, and basil.</p>
          <span>$9.99</span>
        </div>
        <div className="menu-item">
          <img src={LemonDessert} alt="Lemon Dessert" />
          <h3>Lemon Dessert</h3>
          <p>A delightful and sweet lemon-based treat.</p>
          <span>$6.99</span>
        </div>
      </div>
    </main>
  );
}

export default MenuPage;
