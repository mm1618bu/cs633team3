import React, { useState } from 'react';
import './index.css'; // Import your CSS file
import ShoppingCart from './ShoppingCart';

const foodItems = [
  {
    "name": "Double-Double",
    "description": "Two beef patties, two slices of American cheese, lettuce, tomato, and spread on a bun.",
    "price": 3.99,
    "calories": 670,
    "image": "double_double.jpg"
  },
  {
    "name": "Cheeseburger",
    "description": "A single beef patty, a slice of American cheese, lettuce, tomato, and spread on a bun.",
    "price": 2.45,
    "calories": 480,
    "image": "cheeseburger.jpg"
  },
  {
    "name": "Hamburger",
    "description": "A single beef patty, lettuce, tomato, and spread on a bun.",
    "price": 2.10,
    "calories": 390,
    "image": "hamburger.jpg"
  },
  {
    "name": "Animal-Style Fries",
    "description": "French fries topped with melted cheese, spread, and grilled onions.",
    "price": 3.99,
    "calories": 750,
    "image": "animal_style_fries.jpg"
  },
  {
    "name": "Milkshake",
    "description": "A classic milkshake in flavors like chocolate, strawberry, and vanilla.",
    "price": 2.15,
    "calories": 590,
    "image": "milkshake.jpg"
  },
  {
    "name": "Soft Drink",
    "price": 1.65,
    "calories": 0,
    "image": "soft_drink.jpg"
  },
  {
    "name": "Lemonade",
    "price": 1.65,
    "calories": 200,
    "image": "lemonade.jpg"
  },
  {
    "name": "Iced Tea",
    "price": 1.65,
    "calories": 0,
    "image": "iced_tea.jpg"
  }
];

const InAndOut = () => {
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

export default InAndOut;
