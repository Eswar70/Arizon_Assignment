import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Hero.css';

function Hero() {
  return (
    <section className="HeroSec">
      <h1>Welcome to Gen Z World</h1>
      <p>Find the best products at the best prices</p>
      <Link to="/products" className="link">
        Shop Now
      </Link>
    </section>
  );
}

export default Hero;
