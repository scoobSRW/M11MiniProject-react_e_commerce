import React from 'react';
import { deleteCustomer } from "../../services/api";

const CustomerDetails = ({ customer, onDelete }) => {
  const handleDelete = async () => {
    try {
      await deleteCustomer(customer.id);
      onDelete(customer.id); // Update parent component's state to remove customer from list
    } catch (error) {
      console.error('Failed to delete customer:', error);
      // Show an error message (optional)
    }
  };

  return (
    <div>
      <h3>Customer Details</h3>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
      <button onClick={handleDelete}>Delete Customer</button>
    </div>
  );
};

export default CustomerDetails;
