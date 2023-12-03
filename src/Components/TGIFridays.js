import React, { useState } from 'react';
import './index.css';
import OrderShoppingCart from './OrderShoppingCart';
import Reviews from './Reviews';

const foodItems = [
  {
      "name": "Jack Daniel's Chicken Sandwich",
      "description": "Fridays™ Big Ribs glazed with Jack Daniel's® and served with seasoned fries and coleslaw.",
      "price": 14.99,
      "calories": 980,
      "image": "jd_chicken_sandwich.jpg"
  },
  {
      "name": "Loaded Potato Skins",
      "description": "Crispy potato skins loaded with melted cheese, bacon, and green onions. Served with sour cream.",
      "price": 9.99,
      "calories": 610,
      "image": "loaded_potato_skins.jpg"
  },
  {
      "name": "Fridays™ Big Ribs",
      "description": "Full rack of Fridays™ Big Ribs glazed with Jack Daniel's® and served with seasoned fries and coleslaw.",
      "price": 18.99,
      "calories": 1220,
      "image": "big_ribs.jpg"
  },
  {
      "name": "Sizzling Chicken & Shrimp",
      "description": "Sautéed chicken and shrimp with onions and bell peppers. Served with warm tortillas, lettuce, and pico de gallo.",
      "price": 15.99,
      "calories": 800,
      "image": "sizzling_chicken_shrimp.jpg"
  },
  {
      "name": "Mozzarella Sticks",
      "description": "Golden mozzarella blended with Asiago. Served with marinara sauce.",
      "price": 8.99,
      "calories": 620,
      "image": "mozzarella_sticks.jpg"
  },
  {
      "name": "Oreo Madness",
      "price": 6.99,
      "calories": 1090,
      "image": "oreo_madness.jpg"
  },
  {
      "name": "Fridays™ Long Island Iced Tea",
      "price": 8.99,
      "calories": 280,
      "image": "long_island_iced_tea.jpg"
  },
  {
      "name": "Mango Passion Fruit Tea",
      "price": 2.49,
      "calories": 100,
      "image": "mango_passion_fruit_tea.jpg"
  }
];

const TGIFridays = () => {
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

export default TGIFridays;
