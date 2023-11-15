import React, { useState } from 'react';
import './index.css'; // Import your CSS file
import ShoppingCart from './ShoppingCart';

const foodItems = [
  {
    "name": "Whopper",
    "description": "The classic Burger King Whopper.",
    "price": 4.99,
    "calories": 660,
    "image": "whopper.jpg"
  },
  {
    "name": "Cheeseburger",
    "price": 1.49,
    "calories": 300,
    "image": "cheeseburger.jpg"
  },
  {
    "name": "Chicken Royale",
    "price": 3.29,
    "calories": 440,
    "image": "chicken_royale.jpg"
  },
  {
    "name": "Spicy Chicken Sandwich",
    "price": 3.49,
    "calories": 480,
    "image": "spicy_chicken_sandwich.jpg"
  },
  {
    "name": "French Fries",
    "price": 1.89,
    "calories": 365,
    "image": "french_fries.jpg"
  },
  {
    "name": "Onion Rings",
    "price": 2.29,
    "calories": 400,
    "image": "onion_rings.jpg"
  },
  {
    "name": "Coca-Cola",
    "price": 1.69,
    "calories": 140,
    "image": "coca_cola.jpg"
  },
  {
    "name": "Diet Coke",
    "price": 1.69,
    "calories": 0,
    "image": "diet_coke.jpg"
  }
];

const BurgerKing = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // Check if the item is already in the cart
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.name === item.name);

    if (itemIndex === -1) {
      // Item is not in the cart, so add it with a quantity of 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      // Item is already in the cart, so update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    }
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.name !== item.name);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="order-page">
      <h1>Featured Items</h1>
      <div className="food-grid">
        {foodItems.map((item, index) => (
          <div key={index} className="food-card">
            <div className="food-info">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p>Calories: {item.calories} cal</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
              <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
            </div>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
      <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default BurgerKing;
