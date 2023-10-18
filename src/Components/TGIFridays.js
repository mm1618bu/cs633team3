import React, { useState } from 'react';
import './index.css'; // Import your CSS file
import ShoppingCart from './ShoppingCart';

const foodItems = [
  {
      "name": "Jack Daniel's Chicken Sandwich",
      "description": "Fridays™ Big Ribs glazed with Jack Daniel's® and served with seasoned fries and coleslaw.",
      "price": 14.99,
      "calories": 980,
      "image": "jd_chicken_sandwich.jpg"
  },
  {
      "name": "Loaded Potato Skins",
      "description": "Crispy potato skins loaded with melted cheese, bacon, and green onions. Served with sour cream.",
      "price": 9.99,
      "calories": 610,
      "image": "loaded_potato_skins.jpg"
  },
  {
      "name": "Fridays™ Big Ribs",
      "description": "Full rack of Fridays™ Big Ribs glazed with Jack Daniel's® and served with seasoned fries and coleslaw.",
      "price": 18.99,
      "calories": 1220,
      "image": "big_ribs.jpg"
  },
  {
      "name": "Sizzling Chicken & Shrimp",
      "description": "Sautéed chicken and shrimp with onions and bell peppers. Served with warm tortillas, lettuce, and pico de gallo.",
      "price": 15.99,
      "calories": 800,
      "image": "sizzling_chicken_shrimp.jpg"
  },
  {
      "name": "Mozzarella Sticks",
      "description": "Golden mozzarella blended with Asiago. Served with marinara sauce.",
      "price": 8.99,
      "calories": 620,
      "image": "mozzarella_sticks.jpg"
  },
  {
      "name": "Oreo Madness",
      "price": 6.99,
      "calories": 1090,
      "image": "oreo_madness.jpg"
  },
  {
      "name": "Fridays™ Long Island Iced Tea",
      "price": 8.99,
      "calories": 280,
      "image": "long_island_iced_tea.jpg"
  },
  {
      "name": "Mango Passion Fruit Tea",
      "price": 2.49,
      "calories": 100,
      "image": "mango_passion_fruit_tea.jpg"
  }
];

const TGIFridays = () => {
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
              <p>Calories: {item.calories} kcal</p>
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

export default TGIFridays;