import React, { useState } from 'react';
import './index.css';
import OrderShoppingCart from './OrderShoppingCart';
import Reviews from './Reviews';

const foodItems = [
  {
      "name": "Supreme Pizza",
      "price": 14.99,
      "calories": 280,
      "image": "supreme_pizza.jpg"
  },
  {
      "name": "Hawaiian Pizza",
      "price": 12.99,
      "calories": 320,
      "image": "hawaiian_pizza.jpg"
  },
  {
      "name": "Meat Lover's Pizza",
      "price": 16.99,
      "calories": 350,
      "image": "meat_lovers_pizza.jpg"
  },
  {
      "name": "Veggie Lover's Pizza",
      "price": 13.99,
      "calories": 250,
      "image": "veggie_lovers_pizza.jpg"
  },
  {
      "name": "Chicken Alfredo Pasta",
      "price": 11.99,
      "calories": 450,
      "image": "chicken_alfredo_pasta.jpg"
  },
  {
      "name": "Stuffed Garlic Knots",
      "price": 6.99,
      "calories": 280,
      "image": "stuffed_garlic_knots.jpg"
  },
  {
      "name": "Chocolate Brownie Dessert",
      "price": 5.99,
      "calories": 350,
      "image": "chocolate_brownie.jpg"
  },
  {
      "name": "Pepsi",
      "price": 1.99,
      "calories": 150,
      "image": "pepsi.jpg"
  }
];

const PizzaHut = () => {
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

export default PizzaHut;
