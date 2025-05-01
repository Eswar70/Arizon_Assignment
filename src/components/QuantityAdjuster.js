import React from 'react';
import { useCart } from '../context/CartContext';

function QuantityAdjuster({ item }) {
  const { dispatch } = useCart();

  const handleIncrease = () => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch({
        type: 'ADJUST_QUANTITY',
        payload: { id: item.id, quantity: item.quantity - 1 },
      });
    } else {
      dispatch({ type: 'REMOVE_FROM_CART', payload: item.id });
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button onClick={handleDecrease} className="px-2 bg-gray-300">-</button>
      <span>{item.quantity}</span>
      <button onClick={handleIncrease} className="px-2 bg-gray-300">+</button>
    </div>
  );
}

export default QuantityAdjuster;
