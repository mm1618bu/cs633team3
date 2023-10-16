import React from 'react';

const ShoppingCart = ({ cartItems }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ol>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ol>
      <p>Total: ${calculateTotalPrice()}</p>
    </div>
  );
};

export default ShoppingCart;
