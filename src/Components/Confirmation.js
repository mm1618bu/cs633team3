// Confirmation.js
import React from 'react';

const Confirmation = () => {
    const order = {
        items: [
          { name: 'Item 1', price: 10 },
          { name: 'Item 2', price: 15 },
        ],
        totalAmount: 25,
        status: 'Paid',
      };  
  return (
    <div>
      <h2>Order Confirmation</h2>
      <p>Thank you for your order! Your order details are as follows:</p>
      <ul>
        {order.items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total Amount: ${order.totalAmount}</p>
      <p>Status: {order.status}</p>
    </div>
  );
};

export default Confirmation;
