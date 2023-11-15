import React, { useState } from 'react';
import './index.css'; // Import your CSS file
import ShoppingCart from './ShoppingCart';

const foodItems = [
  {
      "name": "Fettuccine Alfredo",
      "description": "Fettuccine pasta with a creamy Alfredo sauce.",
      "price": 12.99,
      "calories": 830,
      "image": "fettuccine_alfredo.jpg"
  },
  {
      "name": "Tour of Italy",
      "description": "Lasagna, Chicken Parmesan, and Fettuccine Alfredo.",
      "price": 17.99,
      "calories": 1520,
      "image": "tour_of_italy.jpg"
  },
  {
      "name": "Chicken Alfredo",
      "description": "Grilled chicken with fettuccine pasta and Alfredo sauce.",
      "price": 14.99,
      "calories": 1200,
      "image": "chicken_alfredo.jpg"
  },
  {
      "name": "Unlimited Soup, Salad, and Breadsticks",
      "description": "Endless servings of soup, salad, and breadsticks.",
      "price": 9.99,
      "calories": 750,
      "image": "unlimited_ssb.jpg"
  },
  {
      "name": "Eggplant Parmigiana",
      "description": "Breaded eggplant topped with marinara and mozzarella cheese over spaghetti.",
      "price": 13.99,
      "calories": 980,
      "image": "eggplant_parmigiana.jpg"
  },
  {
      "name": "Tiramisu",
      "price": 6.99,
      "calories": 320,
      "image": "tiramisu.jpg"
  },
  {
      "name": "Peach Iced Tea",
      "price": 2.49,
      "calories": 100,
      "image": "peach_iced_tea.jpg"
  },
  {
      "name": "Italian Margarita",
      "price": 8.99,
      "calories": 280,
      "image": "italian_margarita.jpg"
  }
];

const OliveGarden = () => {
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

export default OliveGarden;
