import React, { useState } from 'react';

const CreateOrderForm = ({ onSubmit }) => {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ productId, quantity });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button type="submit">Create Order</button>
    </form>
  );
};

export default CreateOrderForm;
