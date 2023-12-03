import React, { useState } from 'react';
import './index.css';
import OrderShoppingCart from './OrderShoppingCart';
import Reviews from './Reviews';

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
    image: "french_fries.jpg",
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

export default Wendys;
