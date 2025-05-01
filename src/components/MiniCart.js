import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './styles/MiniCart.css';

function MiniCart() {
  const { cartItems } = useCart();
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="minicart-container">
      <h2 className="minicart-title">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-message">No items in cart</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="minicart-item">
              <img src={item.image} className="minicart-img" alt={item.title} />
              <span className="minicart-name">{item.title.slice(0, 10)}...</span>
              <span className="minicart-qty">x{item.quantity}</span>
            </div>
          ))}
          <p className="minicart-subtotal">Subtotal: ${subtotal.toFixed(2)}</p>
          <Link to="/cart" className="minicart-btn view">View Cart</Link>
          <button className="minicart-btn checkout" disabled>Checkout</button>
        </>
      )}
    </div>
  );
}

export default MiniCart;
