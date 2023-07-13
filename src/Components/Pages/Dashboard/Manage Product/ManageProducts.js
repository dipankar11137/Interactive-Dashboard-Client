import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
  const [products, setProducts] = useState([5]);
  const [singleProduct, setSingleProduct] = useState({});
  const [increase, setIncrease] = useState(false);
  const [decrease, setDecrease] = useState(false);
  useEffect(() => {
    fetch('http://localhost:5000/allProduct')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);
  const handleEdit = id => {
    fetch(`http://localhost:5000/product/${id}`)
      .then(res => res.json())
      .then(data => setSingleProduct(data));
  };

  const handleRestock = event => {
    setIncrease(false);
    event.preventDefault();
    const newQuantity =
      parseInt(event.target.quantity.value) + parseInt(singleProduct?.quantity);
    console.log(event.target.quantity.value);
    console.log('hello');
    // const updateQuantity = { quantity: newQuantity };
    // fetch(`http://localhost:5000/bloodId/${singleProduct?._id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(updateQuantity),
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     toast.success('Restock Is Successfully');
    //     event.target.reset();
    //   });
  };

  const handleDecrease = event => {
    event.preventDefault();
    setDecrease(false);
    // if (
    //   parseInt(singleProduct?.quantity) >= parseInt(event.target.quantity.value)
    // ) {
    //   const newQuantity =
    //     parseInt(singleProduct?.quantity) -
    //     parseInt(event.target.quantity.value);
    //   const updateQuantity = { quantity: newQuantity };
    //   fetch(`http://localhost:5000/bloodId/${singleProduct?._id}`, {
    //     method: 'PUT',
    //     headers: {
    //       'content-type': 'application/json',
    //     },
    //     body: JSON.stringify(updateQuantity),
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //       toast.success('Decrease Is Successfully');
    //       event.target.reset();
    //     });
    // } else {
    //   toast.error('The new value is greater than the previous value');
    //   event.target.reset();
    // }
  };
  return (
    <div className="mb-20">
      <div className="overflow-x-auto p-2">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th className="text-sm">Index</th>
              <th className="text-sm">Image</th>
              <th className="text-sm">Name</th>
              <th className="text-sm">Price</th>
              <th className="text-sm">Quantity</th>
              <th className="text-sm">Increase Quantity</th>
              <th className="text-sm">Decrease</th>
              <th className="text-sm">Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {products.map((product, index) => (
              <ManageProduct
                key={product._id}
                product={product}
                index={index + 1}
                handleEdit={handleEdit}
                singleProduct={singleProduct}
                handleRestock={handleRestock}
                handleDecrease={handleDecrease}
                increase={increase}
                setIncrease={setIncrease}
                decrease={decrease}
                setDecrease={setDecrease}
              ></ManageProduct>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
