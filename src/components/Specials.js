// src/components/Specials.js
import './Specials.css';
import { Link } from 'react-router-dom';
import Greek from '../assets/greek salad.jpg';
import Bruschetta  from '../assets/bruchetta.svg';
import LemonDessert from '../assets/lemon dessert.jpg';

function Specials() {
  const specials = [
    {
      id: 1,
      name: 'Greek Salad',
      description: 'Fresh lettuce, tomatoes, olives, and feta cheese with a light dressing.',
      price: '$12.99',
      image: Greek,
    },
    {
      id: 2,
      name: 'Lemon Dessert',
      description: 'A refreshing dessert made with zesty lemon and a creamy base.',
      price: '$15.99',
      image: LemonDessert,
    },
    {
      id: 3,
      name: 'Bruschetta',
      description: 'Grilled bread topped with garlic, tomatoes, and basil.',
      price: '$6.99',
      image: Bruschetta,
    },
  ];

  return (
    <section className="specials-section">
      <h2 className='center'>This Week’s Specials!</h2>
      <div className="specials-list">
        {specials.map(({ id, name, description, price, image }) => (
          <article key={id} className="special-item">
            <img src={image} alt={name} />
            <div className="special-info">
              <div className="special-header">
                <h3>{name}</h3>
                <span className="special-price">{price}</span>
              </div>
              <p>{description}</p>
              <Link to ="/order">
              <button className="order-button">Order a delivery</button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
