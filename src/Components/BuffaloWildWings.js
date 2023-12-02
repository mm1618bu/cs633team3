import React, { useState } from 'react';
import './index.css'; // Import your CSS file
import ShoppingCart from './ShoppingCart';

const buffaloWildWingsFoodItems = [
  {
    "name": "Traditional Wings",
    "description": "Classic chicken wings with your choice of sauce.",
    "price": 10.99,
    "calories": 800,
    "image": "traditional_wings.jpg"
  },
  {
    "name": "Boneless Wings",
    "description": "Boneless chicken wings with various sauce options.",
    "price": 9.99,
    "calories": 700,
    "image": "boneless_wings.jpg"
  },
  {
    "name": "Buffalo Chicken Nachos",
    "description": "Crispy nachos topped with shredded buffalo chicken, cheese, and veggies.",
    "price": 12.49,
    "calories": 850,
    "image": "buffalo_chicken_nachos.jpg"
  },
  {
    "name": "Chicken Quesadilla",
    "description": "Grilled chicken, cheese, and veggies in a warm tortilla.",
    "price": 8.99,
    "calories": 600,
    "image": "chicken_quesadilla.jpg"
  },
  {
    "name": "Buffalo Ranch Wrap",
    "description": "Grilled chicken, lettuce, tomatoes, and ranch dressing in a wrap.",
    "price": 11.99,
    "calories": 750,
    "image": "buffalo_ranch_wrap.jpg"
  },
  {
    "name": "Mozzarella Sticks",
    "description": "Golden fried mozzarella sticks served with marinara sauce.",
    "price": 7.99,
    "calories": 450,
    "image": "mozzarella_sticks.jpg"
  },
  {
    "name": "Buffalo Wild Wings Sampler",
    "description": "A variety of wings, tenders, and mozzarella sticks with different sauces.",
    "price": 15.99,
    "calories": 1100,
    "image": "bww_sampler.jpg"
  },
  {
    "name": "Soft Drinks",
    "price": 2.49,
    "calories": 150,
    "image": "soft_drinks.jpg"
  }
];

const BuffaloWildWings = () => {
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
      <h1>Buffalo Wild Wings Favorites</h1>
      <div className="food-grid">
        {buffaloWildWingsFoodItems.map((item, index) => (
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

export default BuffaloWildWings;
