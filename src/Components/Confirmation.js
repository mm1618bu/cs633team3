// Confirmation.js
import React from 'react';
import './index.css'; // Import the CSS file

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
    <div className="confirmation-container">
      <h2 className="confirmation-header">Order Confirmation</h2>
      <p className="confirmation-text">
        Thank you for your order! Your order details are as follows:
      </p>
      <ul className="confirmation-list">
        {order.items.map((item, index) => (
          <li className="confirmation-item" key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p className="confirmation-total">Total Amount: ${order.totalAmount}</p>
      <p className="confirmation-status">
        Status: <span className="status-text">{order.status}</span>
      </p>
    </div>
  );
};

export default Confirmation;
