import React, { useState } from 'react';
import './index.css';
import OrderShoppingCart from './OrderShoppingCart';
import Reviews from './Reviews';

const foodItems = [
  {
    "name": "Crunchy Taco",
    "description": "Seasoned beef, lettuce, and cheese in a crunchy taco shell.",
    "price": 1.49,
    "calories": 170,
    "image": "crunchy_taco.jpg"
  },
  {
    "name": "Bean Burrito",
    "description": "A classic burrito with seasoned beans, cheese, and red sauce.",
    "price": 2.99,
    "calories": 350,
    "image": "bean_burrito.jpg"
  },
  {
    "name": "Doritos Locos Tacos",
    "description": "Crunchy taco shell made from Doritos with seasoned beef, lettuce, and cheese.",
    "price": 1.89,
    "calories": 200,
    "image": "doritos_locos_tacos.jpg"
  },
  {
    "name": "Quesarito",
    "description": "A burrito with seasoned beef, rice, cheese, and creamy chipotle sauce.",
    "price": 3.99,
    "calories": 490,
    "image": "quesarito.jpg"
  },
  {
    "name": "Nachos Supreme",
    "description": "Crispy tortilla chips topped with seasoned beef, tomatoes, and nacho cheese.",
    "price": 4.49,
    "calories": 460,
    "image": "nachos_supreme.jpg"
  },
  {
    "name": "Cinnamon Twists",
    "price": 1.29,
    "calories": 170,
    "image": "cinnamon_twists.jpg"
  },
  {
    "name": "Mountain Dew Baja Blast",
    "price": 2.29,
    "calories": 210,
    "image": "baja_blast.jpg"
  },
  {
    "name": "Bottled Water",
    "price": 1.49,
    "calories": 0,
    "image": "bottled_water.jpg"
  }
];

const TacoBell = () => {
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


export default TacoBell;
