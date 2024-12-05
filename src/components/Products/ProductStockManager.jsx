import React, { useState } from 'react';

const ProductStockManager = ({ product, onUpdateStock }) => {
  const [stock, setStock] = useState(product.stock);

  const handleUpdateStock = (e) => {
    e.preventDefault();
    onUpdateStock({ ...product, stock });
  };

  return (
    <form onSubmit={handleUpdateStock}>
      <input
        type="number"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <button type="submit">Update Stock</button>
    </form>
  );
};

export default ProductStockManager;
