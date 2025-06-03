import { useState } from "react";
import "./OrderPage.css";
import Greek from '../assets/greek salad.jpg';
import Bruschetta  from '../assets/bruchetta.svg';
import LemonDessert from '../assets/lemon dessert.jpg';
const MENU_ITEMS = [
  { id: 1, name: "Greek Salad", price: 12.99, image: Greek },
  { id: 2, name: "Bruschetta", price: 9.99, image: Bruschetta },
  { id: 3, name: "Lemon Dessert", price: 6.99, image: LemonDessert },
];

function OrderPage() {
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [confirmedAddress, setConfirmedAddress] = useState("");

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const placeOrder = () => {
    if (!address.trim()) return alert("Please enter delivery address");
    setOrderPlaced(true);
    setConfirmedAddress(address);
    setCart([]);
    setAddress("");
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <main className="order-page">
      <h2>Order a Delivery</h2>

      <div className="menu-selection">
        {MENU_ITEMS.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <button onClick={() => addToCart(item)}>Add</button>
          </div>
        ))}
      </div>

      <div className="cart-section">
        <h3>Your Cart</h3>
        {cart.length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, i) => (
                <li key={i}>{item.name} - ${item.price}</li>
              ))}
            </ul>
            <p><strong>Total:</strong> ${total}</p>
            <textarea
              placeholder="Enter your delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
            <button onClick={placeOrder}>Place Order</button>
          </>
        )}
      </div>

      {orderPlaced && (
        <div className="order-confirmation">
          <h3>✅ Order Placed!</h3>
          <p>Thanks! Your food is on the way to:</p>
          <p><em>{confirmedAddress}</em></p>
        </div>
      )}
    </main>
  );
}

export default OrderPage;
