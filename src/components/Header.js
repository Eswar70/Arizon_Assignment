import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MiniCart from './MiniCart';
import './styles/Header.css';

function Header() {
  const [showCart, setShowCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="custom-header">
      <Link to="/" className="logo link">
        <img src="https://static.vecteezy.com/system/resources/previews/026/723/542/large_2x/the-logo-for-gen-z-vector.jpg" alt="logo" className='logo-img' />
      </Link>

      <nav className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
        <Link to="/" className="link">Home</Link>
        <Link to="/products" className="link">Men</Link>
        <Link to="/products" className="link">Women</Link>
        <Link to="/products" className="link">Kids</Link>
        <Link to="/products" className="link">Products</Link>
      </nav>

      <div className="right-icons">

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <img src="https://icon-library.com/images/hamburger-menu-icon-transparent/hamburger-menu-icon-transparent-21.jpg" alt="menu" className='hamburger-icon' />
        </button>

        <button className='button' onClick={() => setShowCart(!showCart)}>
          <img src="https://img.freepik.com/premium-vector/girl-with-shopping-cart-silhouette-vector-illustration_701806-5959.jpg" alt="cart" className='cart-icon' />
        </button>

      </div>

      {showCart && <MiniCart />}
    </header>
  );
}

export default Header;
