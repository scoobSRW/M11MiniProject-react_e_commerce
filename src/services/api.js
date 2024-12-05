const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:3000/api';
// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    const error = new Error(errorData.message || 'Something went wrong');
    error.status = response.status;
    throw error;
  }
  return response.json();
};

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    return await handleResponse(response);
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Re-throw to handle in the calling function
  }
};

// Delete a product by ID
export const deleteProduct = async (productId) => {
  try {
    const response = await fetch(`${API_URL}/products/${productId}`, {
      method: 'DELETE',
    });
    return await handleResponse(response);
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

// Add a new product
export const createProduct = async (productData) => {
  try {
    const response = await fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

// Update an existing product
export const updateProduct = async (productId, productData) => {
  try {
    const response = await fetch(`${API_URL}/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};
