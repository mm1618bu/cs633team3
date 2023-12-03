import React, { useState } from 'react';
import './index.css';
import OrderShoppingCart from './OrderShoppingCart';
import Reviews from './Reviews';

const foodItems = [
  {
    "name": "Pancake Stack",
    "description": "A stack of fluffy pancakes served with syrup and butter.",
    "price": 8.99,
    "calories": 600,
    "image": "pancake_stack.jpg"
  },
  {
    "name": "Belgian Waffle",
    "description": "A delicious Belgian waffle topped with fresh fruits and whipped cream.",
    "price": 9.49,
    "calories": 700,
    "image": "belgian_waffle.jpg"
  },
  {
    "name": "Omelette",
    "description": "A fluffy omelette with your choice of fillings, served with hash browns.",
    "price": 10.99,
    "calories": 800,
    "image": "omelette.jpg"
  },
  {
    "name": "French Toast",
    "description": "Thick slices of French toast served with powdered sugar and maple syrup.",
    "price": 7.99,
    "calories": 550,
    "image": "french_toast.jpg"
  },
  {
    "name": "Bacon and Eggs",
    "description": "Classic breakfast with crispy bacon, eggs, and toast.",
    "price": 6.99,
    "calories": 500,
    "image": "bacon_and_eggs.jpg"
  },
  {
    "name": "Coffee",
    "price": 2.49,
    "calories": 5,
    "image": "coffee.jpg"
  },
  {
    "name": "Fresh Orange Juice",
    "price": 3.29,
    "calories": 120,
    "image": "orange_juice.jpg"
  },
  {
    "name": "Milkshake",
    "description": "Creamy milkshake in various flavors.",
    "price": 4.99,
    "calories": 450,
    "image": "milkshake.jpg"
  }
];

const IHOP = () => {
  const [orderItems, setOrderItems] = useState([]);
  
  const addToOrder = (item) => {
    const itemIndex = orderItems.findIndex((orderItem) => orderItem.name === item.name);

    if (itemIndex === -1) {
      setOrderItems([...orderItems, { ...item, quantity: 1 }]);
    } else {
      const updatedOrderItems = [...orderItems];
      updatedOrderItems[itemIndex].quantity += 1;
      setOrderItems(updatedOrderItems);
    }
  };

  const removeFromOrder = (item) => {
    const updatedOrderItems = orderItems.filter((orderItem) => orderItem.name !== item.name);
    setOrderItems(updatedOrderItems);
  };

  const increaseQuantity = (item) => {
    const updatedOrderItems = orderItems.map((orderItems) => {
      if (orderItems.name === item.name) {
        orderItems.quantity += 1;
      }
      return orderItems;
    });
    setOrderItems(updatedOrderItems);
  };

  const decreaseQuantity = (item) => {
    const updatedOrderItems = orderItems.map((orderItem) => {
      if (orderItem.name === item.name && orderItem.quantity > 1) {
        orderItem.quantity -= 1;
      }
      return orderItem;
    });
    setOrderItems(updatedOrderItems);
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
              <button onClick={() => addToOrder(item)}>Add</button>
              <button onClick={() => removeFromOrder(item)}>Remove</button>
              {orderItems.find((orderItem) => orderItem.name === item.name) && (
                <div className="quantity-control">
                  <button onClick={() => decreaseQuantity(item)}>-</button>
                  <span>{orderItems.find((orderItem) => orderItem.name === item.name).quantity}</span>
                  <button onClick={() => increaseQuantity(item)}>+</button>
                </div>
              )}
            </div>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
      <OrderShoppingCart orderItems={orderItems} removeFromOrder={removeFromOrder} />
      <Reviews />
    </div>
  );
};

export default IHOP;
