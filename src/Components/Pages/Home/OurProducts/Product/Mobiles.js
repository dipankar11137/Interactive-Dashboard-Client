import React, { useEffect, useState } from 'react';
import Product from './Product';

const Mobiles = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://interective-dashboard-server.onrender.com/products/Mobile`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);
  return (
    <div className="mt-16">
      <h1 className="text-3xl font-semibold mb-5">Mobile Phone</h1>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3"
      >
        {products.slice(0, 3).map(product => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Mobiles;
