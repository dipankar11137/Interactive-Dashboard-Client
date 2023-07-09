import React, { useEffect, useState } from 'react';
import Product from './Product';

const Mobiles = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);
  return (
    <div className="">
      <Product />
    </div>
  );
};

export default Mobiles;
