import React from 'react';

const OrderDetails = ({ order }) => {
  return (
    <div>
      <h3>Order Details</h3>
      <p>Product: {order.productName}</p>
      <p>Quantity: {order.quantity}</p>
      <p>Status: {order.status}</p>
    </div>
  );
};

export default OrderDetails;
