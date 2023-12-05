import React, { useState } from 'react';
import './index.css';
import OrderShoppingCart from './OrderShoppingCart';
import Reviews from './Reviews';

const foodItems = [
  {
    "name": "Blizzard",
    "price": 4.99,
    "calories": 450,
    "image": "blizzard.jpg"
  },
  {
    "name": "DQ Bakes! Sandwich",
    "price": 6.49,
    "calories": 550,
    "image": "dq_bakes_sandwich.jpg"
  },
  {
    "name": "Chicken Strip Basket",
    "price": 8.99,
    "calories": 800,
    "image": "chicken_strip_basket.jpg"
  },
  {
    "name": "CheeseBurger",
    "price": 5.99,
    "calories": 600,
    "image": "cheese_grillburger.jpg"
  },
  {
    "name": "Sundae",
    "price": 3.99,
    "calories": 400,
    "image": "sundae.jpg"
  },
  {
    "name": "Chicken Quesadilla Snack Melt",
    "price": 4.49,
    "calories": 350,
    "image": "chicken_quesadilla_snack_melt.jpg"
  },
  {
    "name": "DQ Shake",
    "price": 4.99,
    "calories": 500,
    "image": "dq_shake.jpg"
  },
  {
    "name": "Iced Coffee",
    "price": 2.99,
    "calories": 120,
    "image": "iced_coffee.jpg"
  }
];

const DairyQueen = () => {
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

export default DairyQueen;
