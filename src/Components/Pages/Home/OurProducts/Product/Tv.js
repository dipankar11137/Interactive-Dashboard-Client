import React, { useEffect, useState } from 'react';
import Product from './Product';

const Tv = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   fetch(`http://localhost:5000/products/TV`)
     .then(res => res.json())
     .then(data => setProducts(data));
  }, [products]);
  return (
    <div id="tv" className="mt-10">
      <h1 className="my-5 text-3xl">Tv Products</h1>
      <div
        data-aos="fade-down"
        data-aos-offset="500"
        data-aos-duration="500"
        className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3"
      >
        {products.slice(0, 3).map(product => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Tv;
