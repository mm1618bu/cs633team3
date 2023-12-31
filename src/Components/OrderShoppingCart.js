import React from 'react';
import { Link } from 'react-router-dom';
import './OrderShoppingCart.css';

const OrderShoppingCart = ({ orderItems }) => {
  const calculateTotalPrice = () => {
    return orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <br />
      <h3>My items</h3>
      <ul>
        {orderItems.map((item, index) => (
          <li key={index}>
            {item.quantity} {item.name} - ${item.price.toFixed(2)} each
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotalPrice().toFixed(2)}</p>
      <button>
        <Link to="/checkout">Checkout</Link>
      </button>
    </div>
  );
};

export default OrderShoppingCart;
