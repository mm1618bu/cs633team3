import React from 'react';

const ShoppingCart = ({ cartItems }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <br></br>
      <h3>My items</h3>
      <ol>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.quantity} {item.name} - ${item.price}
          </li>
        ))}
      </ol>
      <p>Total: ${calculateTotalPrice()}</p>
    </div>
  );
};

export default ShoppingCart;
