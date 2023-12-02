import React, { useState } from 'react';
import './index.css'; // Import your CSS file
import ShoppingCart from './ShoppingCart';

const dennysFoodItems = [
  {
    "name": "Grand Slam Breakfast",
    "description": "A hearty breakfast with two pancakes, eggs, bacon, and sausage links.",
    "price": 11.99,
    "calories": 900,
    "image": "grand_slam_breakfast.jpg"
  },
  {
    "name": "Lumberjack Slam",
    "description": "A satisfying meal with pancakes, eggs, bacon, sausage, and hash browns.",
    "price": 13.49,
    "calories": 1100,
    "image": "lumberjack_slam.jpg"
  },
  {
    "name": "Moons Over My Hammy",
    "description": "Classic sandwich with ham, scrambled eggs, and Swiss cheese on grilled sourdough.",
    "price": 9.99,
    "calories": 800,
    "image": "moons_over_my_hammy.jpg"
  },
  {
    "name": "Country-Fried Steak",
    "description": "Breaded and fried steak smothered in country gravy, served with eggs and hash browns.",
    "price": 14.99,
    "calories": 1200,
    "image": "country_fried_steak.jpg"
  },
  {
    "name": "Avocado Chicken Caesar Salad",
    "description": "Grilled chicken, avocado, and Caesar salad with croutons and Parmesan cheese.",
    "price": 12.99,
    "calories": 650,
    "image": "avocado_chicken_caesar_salad.jpg"
  },
  {
    "name": "Milkshake",
    "description": "Creamy milkshake in various flavors.",
    "price": 4.99,
    "calories": 450,
    "image": "milkshake.jpg"
  },
  {
    "name": "Coffee",
    "price": 2.49,
    "calories": 5,
    "image": "coffee.jpg"
  },
  {
    "name": "Orange Juice",
    "price": 3.29,
    "calories": 120,
    "image": "orange_juice.jpg"
  }
];

const Dennys = () => {
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
      <h1>Denny's Specials</h1>
      <div className="food-grid">
        {dennysFoodItems.map((item, index) => (
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

export default Dennys;
