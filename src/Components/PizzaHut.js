import React, { useState } from 'react';
import './index.css';
import ShoppingCart from './ShoppingCart';

const foodItems = [
  {
      "name": "Supreme Pizza",
      "description": "Loaded with pepperoni, Italian sausage, green bell peppers, red onions, and black olives.",
      "price": 14.99,
      "calories": 280,
      "image": "supreme_pizza.jpg"
  },
  {
      "name": "Hawaiian Pizza",
      "description": "A classic with pineapple, ham, and mozzarella cheese.",
      "price": 12.99,
      "calories": 320,
      "image": "hawaiian_pizza.jpg"
  },
  {
      "name": "Meat Lover's Pizza",
      "description": "Piled high with pepperoni, Italian sausage, bacon, and ham.",
      "price": 16.99,
      "calories": 350,
      "image": "meat_lovers_pizza.jpg"
  },
  {
      "name": "Veggie Lover's Pizza",
      "description": "A medley of green bell peppers, red onions, mushrooms, and black olives.",
      "price": 13.99,
      "calories": 250,
      "image": "veggie_lovers_pizza.jpg"
  },
  {
      "name": "Chicken Alfredo Pasta",
      "description": "Fettuccine pasta with creamy Alfredo sauce and grilled chicken.",
      "price": 11.99,
      "calories": 450,
      "image": "chicken_alfredo_pasta.jpg"
  },
  {
      "name": "Stuffed Garlic Knots",
      "description": "Soft, garlic-flavored knots stuffed with melted cheese and served with marinara sauce.",
      "price": 6.99,
      "calories": 280,
      "image": "stuffed_garlic_knots.jpg"
  },
  {
      "name": "Chocolate Brownie Dessert",
      "price": 5.99,
      "calories": 350,
      "image": "chocolate_brownie.jpg"
  },
  {
      "name": "Pepsi",
      "price": 1.99,
      "calories": 150,
      "image": "pepsi.jpg"
  }
];

const PizzaHut = () => {
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

export default PizzaHut;
