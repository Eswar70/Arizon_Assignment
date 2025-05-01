import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import QuantityAdjuster from '../components/QuantityAdjuster';
import './styles/Cart.css';

function Cart() {
  const { cartItems, dispatch } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-grid">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain mr-4"
                  />
                  <div className="item-details">
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="text-gray-700">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </p>
                    <div className="item-actions">
                      <QuantityAdjuster item={item} />
                      <button
                        onClick={() =>
                          dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })
                        }
                        className="text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="order-summary">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button
                className="checkout-btn"
                disabled
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Cart;
