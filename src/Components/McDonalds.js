import React, { useState } from 'react';
import './index.css';
import ShoppingCart from './ShoppingCart';
import Reviews from './Reviews';

const foodItems = [
    {
      "name": "Big Mac",
      "description": "The one and only McDonald's Big Mac.",
      "price": 4.99,
      "calories": 550,
      "image": "Big_Mac.png"
    },
    {
      "name": "Quarter Pounder with Cheese",
      "price": 3.79,
      "calories": 520,
      "image": "Quater_Pounder.png"
    },
    {
      "name": "McChicken",
      "price": 2.29,
      "calories": 350,
      "image": "Chicken_Breast_Meat.jpg"
    },
    {
      "name": "Spicy McChicken",
      "price": 2.49,
      "calories": 400,
      "image": "Chicken_Breast_Meat.png"
    },
    {
      "name": "French Fries",
      "price": 1.89,
      "calories": 365,
      "image": "Fench_Fries.png"
    },
    {
      "name": "Apple Slices",
      "price": 1.00,
      "calories": 35,
      "image": "Apple_Slices.png"
    },
    {
      "name": "Coca-Cola",
      "price": 1.69,
      "calories": 140,
      "image": "Soda.png"
    },
    {
      "name": "Diet Coke",
      "price": 1.69,
      "calories": 0,
      "image": "Soda.png"
    }
  ];
  const McDonalds = () => {
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
                <button onClick={() => addToCart(item)}>Add</button>
                <button onClick={() => removeFromCart(item)}>Remove</button>
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
        <Reviews />
      </div>
    );
  };
  
  export default McDonalds;