import React, { useState } from 'react';
import './index.css';
import ShoppingCart from './ShoppingCart';

const tacoBellFoodItems = [
  {
    "name": "Crunchy Taco",
    "description": "Seasoned beef, lettuce, and cheese in a crunchy taco shell.",
    "price": 1.49,
    "calories": 170,
    "image": "crunchy_taco.jpg"
  },
  {
    "name": "Bean Burrito",
    "description": "A classic burrito with seasoned beans, cheese, and red sauce.",
    "price": 2.99,
    "calories": 350,
    "image": "bean_burrito.jpg"
  },
  {
    "name": "Doritos Locos Tacos",
    "description": "Crunchy taco shell made from Doritos with seasoned beef, lettuce, and cheese.",
    "price": 1.89,
    "calories": 200,
    "image": "doritos_locos_tacos.jpg"
  },
  {
    "name": "Quesarito",
    "description": "A burrito with seasoned beef, rice, cheese, and creamy chipotle sauce.",
    "price": 3.99,
    "calories": 490,
    "image": "quesarito.jpg"
  },
  {
    "name": "Nachos Supreme",
    "description": "Crispy tortilla chips topped with seasoned beef, tomatoes, and nacho cheese.",
    "price": 4.49,
    "calories": 460,
    "image": "nachos_supreme.jpg"
  },
  {
    "name": "Cinnamon Twists",
    "price": 1.29,
    "calories": 170,
    "image": "cinnamon_twists.jpg"
  },
  {
    "name": "Mountain Dew Baja Blast",
    "price": 2.29,
    "calories": 210,
    "image": "baja_blast.jpg"
  },
  {
    "name": "Bottled Water",
    "price": 1.49,
    "calories": 0,
    "image": "bottled_water.jpg"
  }
];

const TacoBell = () => {
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
      <h1>Taco Bell Favorites</h1>
      <div className="food-grid">
        {tacoBellFoodItems.map((item, index) => (
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

export default TacoBell;
