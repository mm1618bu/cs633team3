import React, { useState } from 'react';
import './index.css';
import OrderShoppingCart from './OrderShoppingCart';
import Reviews from './Reviews';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import burrito from '../img/burrito.png';
import bowl from '../img/bowl.png';
import tacos from '../img/tacos.png';
import quesadilla from '../img/quesadilla.png';
import chipsGuacamole from '../img/chips_guacamole.png';
import salad from '../img/salad.png';
import soda from '../img/Soda.png';
import water from '../img/water.png';

const foodItems = [
  {
    "name": "Burrito",
    "description": "A classic burrito filled with your choice of protein, rice, beans, and toppings.",
    "price": 7.99,
    "calories": 700,
    "image": burrito
  },
  {
    "name": "Bowl",
    "description": "A bowl with your choice of protein, rice, beans, and toppings.",
    "price": 7.49,
    "calories": 600,
    "image": bowl
  },
  {
    "name": "Tacos (3-Pack)",
    "description": "Three soft or hard shell tacos with your choice of protein and toppings.",
    "price": 8.99,
    "calories": 450,
    "image": tacos
  },
  {
    "name": "Quesadilla",
    "description": "A quesadilla filled with your choice of protein, cheese, and toppings.",
    "price": 6.99,
    "calories": 550,
    "image":quesadilla
  },
  {
    "name": "Chips and Guacamole",
    "price": 3.49,
    "calories": 320,
    "image": chipsGuacamole
  },
  {
    "name": "Salad",
    "description": "A salad with your choice of protein, greens, and toppings.",
    "price": 8.49,
    "calories": 400,
    "image": salad
  },
  {
    "name": "Soda",
    "price": 1.99,
    "calories": 150,
    "image": soda
  },
  {
    "name": "Bottled Water",
    "price": 1.29,
    "calories": 0,
    "image": water
  }
];

const Chipotle = () => {
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
              <Row>
                <Col md={6}>
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
              </Col>
                <Col md={6}>
          <img src={item.image} alt={item.name} /></Col>
              </Row>
            </div>
          </div>
        ))}
      </div>
      <OrderShoppingCart orderItems={orderItems} removeFromOrder={removeFromOrder} />
      <Reviews />
    </div>
  );
};

export default Chipotle;
