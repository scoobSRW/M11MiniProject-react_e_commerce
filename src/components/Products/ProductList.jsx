import React, { useState } from 'react';
import { fetchProducts, deleteProduct } from "../../services/api";
import ProductConfirmationModal from './ProductConfirmationModal';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [actionType, setActionType] = useState('');

  // Fetch products (Assuming you have a fetchProducts function)
  const loadProducts = async () => {
    const fetchedProducts = await fetchProducts();
    setProducts(fetchedProducts);
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setActionType('Delete');
    setShowModal(true);
  };

  const handleDeleteConfirmation = async () => {
    if (selectedProduct) {
      await deleteProduct(selectedProduct.id);
      setProducts(products.filter(p => p.id !== selectedProduct.id)); // Remove product from list
      setSelectedProduct(null);
    }
  };

  // Call loadProducts on component mount
  React.useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleDeleteClick(product)}>Delete</button>
            {/* Add other buttons for create or update if necessary */}
          </li>
        ))}
      </ul>

      {/* Confirmation Modal for Product Actions */}
      <ProductConfirmationModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={handleDeleteConfirmation}
        actionType={actionType}
        productName={selectedProduct ? selectedProduct.name : ''}
      />
    </div>
  );
};

export default ProductList;
