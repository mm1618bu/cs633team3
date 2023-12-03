import React, { useState } from 'react';
import './index.css';
import OrderShoppingCart from './ShoppingCart';
import Reviews from './Reviews';

const foodItems = [
    {
      "name": "Big Mac",
      "description": "The one and only McDonald's Big Mac.",
      "price": 4.99,
      "calories": 550,
      "image": "Big_Mac.png"
    },
    {
      "name": "Quarter Pounder with Cheese",
      "price": 3.79,
      "calories": 520,
      "image": "Quater_Pounder.png"
    },
    {
      "name": "McChicken",
      "price": 2.29,
      "calories": 350,
      "image": "Chicken_Breast_Meat.jpg"
    },
    {
      "name": "Spicy McChicken",
      "price": 2.49,
      "calories": 400,
      "image": "Chicken_Breast_Meat.png"
    },
    {
      "name": "French Fries",
      "price": 1.89,
      "calories": 365,
      "image": "Fench_Fries.png"
    },
    {
      "name": "Apple Slices",
      "price": 1.00,
      "calories": 35,
      "image": "Apple_Slices.png"
    },
    {
      "name": "Coca-Cola",
      "price": 1.69,
      "calories": 140,
      "image": "Soda.png"
    },
    {
      "name": "Diet Coke",
      "price": 1.69,
      "calories": 0,
      "image": "Soda.png"
    }
  ];
  const McDonalds = () => {
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
      const updatedOrderItems = orderItems.map((cartItem) => {
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
  
  export default McDonalds;