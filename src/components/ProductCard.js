import React from 'react';
import { useCart } from '../context/CartContext';
import './styles/ProductCard.css';

function ProductCard({ product }) {
  const { dispatch } = useCart();

  return (
    <div className="ProductCard">
      <img src={product.image} className="productImg" alt={product.title} />
      <h3 className="text-sm font-semibold mb-1">{product.title}</h3>
      <p className="mb-2">${product.price}</p>
      <button
        className="bg-blue-500 text-white py-1"
        onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
