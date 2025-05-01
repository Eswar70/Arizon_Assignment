import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default Home;
