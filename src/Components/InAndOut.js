import React, { useState } from 'react';
import './index.css';
import OrderShoppingCart from './OrderShoppingCart';
import Reviews from './Reviews';
import imgitalian from '../img/italian.png';

const foodItems = [
  {
    "name": "Double-Double",
    "description": "Two beef patties, two slices of American cheese, lettuce, tomato, and spread on a bun.",
    "price": 3.99,
    "calories": 670,
    "image": imgitalian
  },
  {
    "name": "Cheeseburger",
    "description": "A single beef patty, a slice of American cheese, lettuce, tomato, and spread on a bun.",
    "price": 2.45,
    "calories": 480,
    "image": imgitalian
  },
  {
    "name": "Hamburger",
    "description": "A single beef patty, lettuce, tomato, and spread on a bun.",
    "price": 2.10,
    "calories": 390,
    "image": imgitalian
  },
  {
    "name": "Animal-Style Fries",
    "description": "French fries topped with melted cheese, spread, and grilled onions.",
    "price": 3.99,
    "calories": 750,
    "image": imgitalian
  },
  {
    "name": "Milkshake",
    "description": "A classic milkshake in flavors like chocolate, strawberry, and vanilla.",
    "price": 2.15,
    "calories": 590,
    "image": imgitalian
  },
  {
    "name": "Soft Drink",
    "price": 1.65,
    "calories": 0,
    "image": imgitalian
  },
  {
    "name": "Lemonade",
    "price": 1.65,
    "calories": 200,
    "image": imgitalian
  },
  {
    "name": "Iced Tea",
    "price": 1.65,
    "calories": 0,
    "image": imgitalian
  }
];

const InAndOut = () => {
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

export default InAndOut;
