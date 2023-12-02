import React, { useState } from 'react';
import './index.css'; // Import your CSS file
import ShoppingCart from './ShoppingCart';

const ihopFoodItems = [
  {
    "name": "Pancake Stack",
    "description": "A stack of fluffy pancakes served with syrup and butter.",
    "price": 8.99,
    "calories": 600,
    "image": "pancake_stack.jpg"
  },
  {
    "name": "Belgian Waffle",
    "description": "A delicious Belgian waffle topped with fresh fruits and whipped cream.",
    "price": 9.49,
    "calories": 700,
    "image": "belgian_waffle.jpg"
  },
  {
    "name": "Omelette",
    "description": "A fluffy omelette with your choice of fillings, served with hash browns.",
    "price": 10.99,
    "calories": 800,
    "image": "omelette.jpg"
  },
  {
    "name": "French Toast",
    "description": "Thick slices of French toast served with powdered sugar and maple syrup.",
    "price": 7.99,
    "calories": 550,
    "image": "french_toast.jpg"
  },
  {
    "name": "Bacon and Eggs",
    "description": "Classic breakfast with crispy bacon, eggs, and toast.",
    "price": 6.99,
    "calories": 500,
    "image": "bacon_and_eggs.jpg"
  },
  {
    "name": "Coffee",
    "price": 2.49,
    "calories": 5,
    "image": "coffee.jpg"
  },
  {
    "name": "Fresh Orange Juice",
    "price": 3.29,
    "calories": 120,
    "image": "orange_juice.jpg"
  },
  {
    "name": "Milkshake",
    "description": "Creamy milkshake in various flavors.",
    "price": 4.99,
    "calories": 450,
    "image": "milkshake.jpg"
  }
];

const IHOP = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.name === item.name);

    if (itemIndex === -1) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    }
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.name !== item.name);
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.name === item.name) {
        cartItem.quantity += 1;
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.name === item.name && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <div className="order-page">
      <h1>IHOP Specials</h1>
      <div className="food-grid">
        {ihopFoodItems.map((item, index) => (
          <div key={index} className="food-card">
            <div className="food-info">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p>Calories: {item.calories} cal</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
              <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
              {cartItems.find((cartItem) => cartItem.name === item.name) && (
                <div className="quantity-control">
                  <button onClick={() => decreaseQuantity(item)}>-</button>
                  <span>{cartItems.find((cartItem) => cartItem.name === item.name).quantity}</span>
                  <button onClick={() => increaseQuantity(item)}>+</button>
                </div>
              )}
            </div>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
      <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default IHOP;
