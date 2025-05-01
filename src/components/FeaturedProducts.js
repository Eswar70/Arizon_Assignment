import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <section className="featuredProducts">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default FeaturedProducts;
