// Confirmation.js
import React from 'react';

const Confirmation = () => {
    const order = {
        items: [
          { name: 'Item 1', price: 10 },
          { name: 'Item 2', price: 15 },
          { name: 'Item 3', price: 20 },
          { name: 'Item 4', price: 25 },
          { name: 'Item 5', price: 30 },
          { name: 'Item 6', price: 35 },
          { name: 'Item 7', price: 40 },
          { name: 'Item 8', price: 45 },
        ],
        totalAmount: 220,
        status: 'Paid',
      };  
  return (
    <div>
      <h2>Order Confirmation</h2>
      <p>Thank you for your order! Your order details are as follows:</p>
      <ul>
        {order.items.map((item, index) => (
          <li id="confirm-cart" key={index}>
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
