import React from 'react';

const OrderHistory = ({ orders }) => {
  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order #{order.id}: {order.productName} - Quantity: {order.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
