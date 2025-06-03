// src/components/Testimonials.js
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Maria S.',
      review: 'The food is amazing and the staff is super friendly. Highly recommend!',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      id: 2,
      name: 'John D.',
      review: 'Best Mediterranean dishes in Chicago. Cozy ambiance and great service.',
      image: 'https://randomuser.me/api/portraits/men/43.jpg',
    },
    {
      id: 3,
      name: 'Anna K.',
      review: 'I love the fresh ingredients and flavors. Definitely coming back soon!',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];

  return (
    <section className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-list">
        {testimonials.map(({ id, name, review, image }) => (
          <div key={id} className="testimonial-card">
            <img src={image} alt={name} />
            <p className="review">"{review}"</p>
            <p className="customer-name">- {name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
