import React, { useEffect, useState } from 'react';
import Product from './Product';

const Computer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);
  return (
    <div className="mt-10">
      <h1 className="my-5 text-3xl">Computers & Accessories </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
        {products.slice(0, 3).map(product => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Computer;
