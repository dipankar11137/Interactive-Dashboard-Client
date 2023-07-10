import React, { useEffect, useState } from 'react';
import Product from './Product';

const NewProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);
  return (
    <div className="">
      <div
        data-aos="zoom-in"
        data-aos-duration="3000"
        className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3"
      >
        {products.slice(0, 3).map(product => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
