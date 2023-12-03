import React, { useState } from 'react';
import './index.css';
import OrderShoppingCart from './OrderShoppingCart';
import Reviews from './Reviews';

const foodItems = [
  {
    "name": "Traditional Wings",
    "description": "Classic chicken wings with your choice of sauce.",
    "price": 10.99,
    "calories": 800,
    "image": "traditional_wings.jpg"
  },
  {
    "name": "Boneless Wings",
    "description": "Boneless chicken wings with various sauce options.",
    "price": 9.99,
    "calories": 700,
    "image": "boneless_wings.jpg"
  },
  {
    "name": "Buffalo Chicken Nachos",
    "description": "Crispy nachos topped with shredded buffalo chicken, cheese, and veggies.",
    "price": 12.49,
    "calories": 850,
    "image": "buffalo_chicken_nachos.jpg"
  },
  {
    "name": "Chicken Quesadilla",
    "description": "Grilled chicken, cheese, and veggies in a warm tortilla.",
    "price": 8.99,
    "calories": 600,
    "image": "chicken_quesadilla.jpg"
  },
  {
    "name": "Buffalo Ranch Wrap",
    "description": "Grilled chicken, lettuce, tomatoes, and ranch dressing in a wrap.",
    "price": 11.99,
    "calories": 750,
    "image": "buffalo_ranch_wrap.jpg"
  },
  {
    "name": "Mozzarella Sticks",
    "description": "Golden fried mozzarella sticks served with marinara sauce.",
    "price": 7.99,
    "calories": 450,
    "image": "mozzarella_sticks.jpg"
  },
  {
    "name": "Buffalo Wild Wings Sampler",
    "description": "A variety of wings, tenders, and mozzarella sticks with different sauces.",
    "price": 15.99,
    "calories": 1100,
    "image": "bww_sampler.jpg"
  },
  {
    "name": "Soft Drinks",
    "price": 2.49,
    "calories": 150,
    "image": "soft_drinks.jpg"
  }
];

const BuffaloWildWings = () => {
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

export default BuffaloWildWings;
