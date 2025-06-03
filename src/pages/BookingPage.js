import { useState } from 'react';
import './BookingPage.css';

function BookingPage() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('18:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Dining');
  const [customOccasion, setCustomOccasion] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalOccasion = occasion === 'Custom' ? customOccasion : occasion;

    setMessageText(`Hello ${name}, your ${finalOccasion} reservation for ${guests} guest(s) on ${date} at ${time} is confirmed!`);
    setShowMessage(true);

    // Optional auto-hide
    setTimeout(() => setShowMessage(false), 5000);

    setName('');
    setDate('');
    setTime('18:00');
    setGuests(1);
    setOccasion('Dining');
    setCustomOccasion('');
  };

  return (
    <main className="booking-page">
      <h2>Reserve a Table</h2>

      {showMessage && (
        <div className="center-message">
          <button className="close-btn" onClick={() => setShowMessage(false)}>×</button>
          <div className="checkmark-container">
            <div className="checkmark"></div>
          </div>
          <p>{messageText}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="booking-form">
        <label>Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>

        <label>Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>

        <label>Time:
          <select value={time} onChange={(e) => setTime(e.target.value)}>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
          </select>
        </label>

        <label>Guests:
          <input type="number" min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} required />
        </label>

        <label>Occasion:
          <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option>Dining</option>
            <option>Birthday</option>
            <option>Office Party</option>
            <option>Custom</option>
          </select>
        </label>

        {occasion === 'Custom' && (
          <label>Enter Occasion:
            <input type="text" value={customOccasion} onChange={(e) => setCustomOccasion(e.target.value)} required />
          </label>
        )}

        <button type="submit">Book Now</button>
      </form>
    </main>
  );
}

export default BookingPage;
