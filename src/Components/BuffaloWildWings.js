import React, { useState } from 'react';
import './index.css';
import OrderShoppingCart from './OrderShoppingCart';
import Reviews from './Reviews';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import traditionalWings from '../img/traditional_wings.png';
import bonelessWings from '../img/boneless_wings.png';
import buffaloChickenNachos from '../img/buffalo_chicken_nachos.png';
import chickenQuesadilla from '../img/chicken_quesadilla.png';
import buffaloRanchWrap from '../img/buffalo_ranch_wrap.png';
import mozzarellaSticks from '../img/mozzarella_sticks.png';
import softDrinks from '../img/soft_drinks.png';

const foodItems = [
  {
    "name": "Traditional Wings",
    "description": "Classic chicken wings with your choice of sauce.",
    "price": 10.99,
    "calories": 800,
    "image": traditionalWings
  },
  {
    "name": "Boneless Wings",
    "description": "Boneless chicken wings with various sauce options.",
    "price": 9.99,
    "calories": 700,
    "image": bonelessWings
  },
  {
    "name": "Buffalo Chicken Nachos",
    "description": "Crispy nachos topped with shredded buffalo chicken, cheese, and veggies.",
    "price": 12.49,
    "calories": 850,
    "image": buffaloChickenNachos
  },
  {
    "name": "Chicken Quesadilla",
    "description": "Grilled chicken, cheese, and veggies in a warm tortilla.",
    "price": 8.99,
    "calories": 600,
    "image": chickenQuesadilla
  },
  {
    "name": "Buffalo Ranch Wrap",
    "description": "Grilled chicken, lettuce, tomatoes, and ranch dressing in a wrap.",
    "price": 11.99,
    "calories": 750,
    "image": buffaloRanchWrap
  },
  {
    "name": "Mozzarella Sticks",
    "description": "Golden fried mozzarella sticks served with marinara sauce.",
    "price": 7.99,
    "calories": 450,
    "image": mozzarellaSticks
  },
  {
    "name": "Buffalo Wild Wings Sampler",
    "description": "A variety of wings, tenders, and mozzarella sticks with different sauces.",
    "price": 15.99,
    "calories": 1100,
    "image": buffaloRanchWrap
  },
  {
    "name": "Soft Drinks",
    "price": 2.49,
    "calories": 150,
    "image": softDrinks
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
              )}</Col>
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

export default BuffaloWildWings;
