import React, { useState } from 'react';
import './index.css'; // Import your CSS file
import ShoppingCart from './ShoppingCart';

const foodItems = [
  {
    name: "Dave's Single",
    description: "A classic single cheeseburger from Wendy's.",
    price: 4.19,
    calories: 570,
    image: "daves_single.jpg",
  },
  {
    name: "Baconator",
    description: "Wendy's famous Baconator burger.",
    price: 6.39,
    calories: 950,
    image: "baconator.jpg",
  },
  {
    name: "Spicy Chicken Nuggets",
    price: 2.99,
    calories: 190,
    image: "spicy_chicken_nuggets.jpg",
  },
  {
    name: "Classic Chicken Sandwich",
    price: 4.99,
    calories: 490,
    image: "classic_chicken_sandwich.jpg",
  },
  {
    name: "Natural-Cut Fries",
    price: 1.89,
    calories: 420,
    image: "french_fries.jpg", // Assuming Wendy's fries image
  },
  {
    name: "Apple Pecan Chicken Salad",
    price: 6.29,
    calories: 340,
    image: "apple_pecan_chicken_salad.jpg",
  },
  {
    name: "Frosty",
    description: "Wendy's classic chocolate or vanilla Frosty.",
    price: 1.99,
    calories: 340,
    image: "frosty.jpg",
  },
  {
    name: "Iced Tea",
    price: 1.49,
    calories: 0,
    image: "iced_tea.jpg",
  },
];

const Wendys = () => {
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

export default Wendys;
