import React, { useState } from 'react';
import './index.css';
import OrderShoppingCart from './OrderShoppingCart';
import Reviews from './Reviews';

const foodItems = [
  {
    "name": "Grand Slam Breakfast",
    "price": 11.99,
    "calories": 900,
    "image": "grand_slam_breakfast.jpg"
  },
  {
    "name": "Lumberjack Slam",
    "price": 13.49,
    "calories": 1100,
    "image": "lumberjack_slam.jpg"
  },
  {
    "name": "Moons Over My Hammy",
    "price": 9.99,
    "calories": 800,
    "image": "moons_over_my_hammy.jpg"
  },
  {
    "name": "Country-Fried Steak",
    "price": 14.99,
    "calories": 1200,
    "image": "country_fried_steak.jpg"
  },
  {
    "name": "Avocado Chicken Caesar Salad",
    "price": 12.99,
    "calories": 650,
    "image": "avocado_chicken_caesar_salad.jpg"
  },
  {
    "name": "Milkshake",
    "price": 4.99,
    "calories": 450,
    "image": "milkshake.jpg"
  },
  {
    "name": "Coffee",
    "price": 2.49,
    "calories": 5,
    "image": "coffee.jpg"
  },
  {
    "name": "Orange Juice",
    "price": 3.29,
    "calories": 120,
    "image": "orange_juice.jpg"
  }
];

const Dennys = () => {
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

export default Dennys;
