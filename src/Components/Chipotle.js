import React, { useState } from 'react';
import './index.css';
import ShoppingCart from './ShoppingCart';

const foodItems = [
  {
    "name": "Burrito",
    "description": "A classic burrito filled with your choice of protein, rice, beans, and toppings.",
    "price": 7.99,
    "calories": 700,
    "image": "burrito.jpg"
  },
  {
    "name": "Bowl",
    "description": "A bowl with your choice of protein, rice, beans, and toppings.",
    "price": 7.49,
    "calories": 600,
    "image": "bowl.jpg"
  },
  {
    "name": "Tacos (3-Pack)",
    "description": "Three soft or hard shell tacos with your choice of protein and toppings.",
    "price": 8.99,
    "calories": 450,
    "image": "tacos.jpg"
  },
  {
    "name": "Quesadilla",
    "description": "A quesadilla filled with your choice of protein, cheese, and toppings.",
    "price": 6.99,
    "calories": 550,
    "image": "quesadilla.jpg"
  },
  {
    "name": "Chips and Guacamole",
    "price": 3.49,
    "calories": 320,
    "image": "chips_guacamole.jpg"
  },
  {
    "name": "Salad",
    "description": "A salad with your choice of protein, greens, and toppings.",
    "price": 8.49,
    "calories": 400,
    "image": "salad.jpg"
  },
  {
    "name": "Soda",
    "price": 1.99,
    "calories": 150,
    "image": "soda.jpg"
  },
  {
    "name": "Bottled Water",
    "price": 1.29,
    "calories": 0,
    "image": "water.jpg"
  }
];

const Chipotle = () => {
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

export default Chipotle;
