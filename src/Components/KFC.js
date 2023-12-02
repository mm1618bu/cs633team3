import React, { useState } from 'react';
import './index.css'; // Import your CSS file
import ShoppingCart from './ShoppingCart';

const kfcFoodItems = [
  {
    "name": "Fried Chicken Bucket",
    "description": "A bucket filled with our famous fried chicken pieces.",
    "price": 12.99,
    "calories": 1200,
    "image": "fried_chicken_bucket.jpg"
  },
  {
    "name": "Zinger Combo",
    "description": "A combo meal featuring our spicy Zinger Burger with fries and a drink.",
    "price": 9.99,
    "calories": 1000,
    "image": "zinger_combo.jpg"
  },
  {
    "name": "Twister Wrap",
    "description": "A flavorful wrap with grilled chicken, lettuce, and signature sauce.",
    "price": 6.49,
    "calories": 650,
    "image": "twister_wrap.jpg"
  },
  {
    "name": "Popcorn Chicken",
    "description": "Small, bite-sized pieces of seasoned and fried chicken.",
    "price": 4.99,
    "calories": 500,
    "image": "popcorn_chicken.jpg"
  },
  {
    "name": "Mashed Potatoes",
    "price": 2.99,
    "calories": 300,
    "image": "mashed_potatoes.jpg"
  },
  {
    "name": "Cole Slaw",
    "price": 1.99,
    "calories": 150,
    "image": "cole_slaw.jpg"
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

const KFC = () => {
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
        {kfcFoodItems.map((item, index) => (
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

export default KFC;
