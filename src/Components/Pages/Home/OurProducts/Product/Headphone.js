import React, { useEffect, useState } from 'react';
import Product from './Product';

const Headphone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
     fetch(
       `https://interective-dashboard-server.onrender.com/products/Headphone`
     )
       .then(res => res.json())
       .then(data => setProducts(data));
  }, [products]);
  return (
    <div className="mt-10">
      <h1 className="my-5 text-3xl">Headphones </h1>
      <div
        data-aos="fade-down-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3"
      >
        {products.slice(0, 3).map(product => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Headphone;
