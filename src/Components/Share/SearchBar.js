import React, { useState } from 'react';

const SearchBar = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter(product => {
    // Customize the filter logic based on your product data structure
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {/* Render the filtered products or perform other actions */}
      {filteredProducts.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
