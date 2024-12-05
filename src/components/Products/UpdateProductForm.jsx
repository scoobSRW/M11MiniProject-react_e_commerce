import React, { useState } from 'react';

const UpdateProductForm = ({ product, onUpdate }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdate({ ...product, name, price });
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProductForm;
