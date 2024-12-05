import React from 'react';
import { deleteProduct } from "../../services/api";

const ProductDetails = ({ product, onDelete }) => {
  const handleDelete = async () => {
    try {
      await deleteProduct(product.id);
      onDelete(product.id); // Update parent component's state to remove product from list
    } catch (error) {
      console.error('Failed to delete product:', error);
      // Show an error message (optional)
    }
  };

  return (
    <div>
      <h3>Product Details</h3>
      <p>Name: {product.name}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleDelete}>Delete Product</button>
    </div>
  );
};

export default ProductDetails;
