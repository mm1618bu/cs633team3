import React, { useState } from 'react';
import './index.css';
import OrderShoppingCart from './OrderShoppingCart';
import Reviews from './Reviews';

const foodItems = [
  {
    "name": "Fried Chicken Bucket",
    "price": 12.99,
    "calories": 1200,
    "image": "fried_chicken_bucket.jpg"
  },
  {
    "name": "Zinger Combo",
    "price": 9.99,
    "calories": 1000,
    "image": "zinger_combo.jpg"
  },
  {
    "name": "Twister Wrap",
    "price": 6.49,
    "calories": 650,
    "image": "twister_wrap.jpg"
  },
  {
    "name": "Popcorn Chicken",
    "price": 4.99,
    "calories": 500,
    "image": "popcorn_chicken.jpg"
  },
  {
    "name": "Mashed Potatoes",
    "price": 2.99,
    "calories": 300,
    "image": "mashed_potatoes.jpg"
  },
  {
    "name": "Cole Slaw",
    "price": 1.99,
    "calories": 150,
    "image": "cole_slaw.jpg"
  },
  {
    "name": "Soda",
    "price": 1.99,
    "calories": 150,
    "image": "soda.jpg"
  },
  {
    "name": "Bottled Water",
    "price": 1.29,
    "calories": 0,
    "image": "water.jpg"
  }
];

const KFC = () => {
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
       {/* Reviews Component */}
       <Reviews />
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

export default KFC;
