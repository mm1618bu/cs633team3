import React, { useState } from 'react';
import './index.css'; 
import OrderShoppingCart from './OrderShoppingCart';
import Reviews from './Reviews';

const foodItems = [
  {
    "name": "Whopper",
    "description": "The  Whopper.",
    "price": 4.99,
    "calories": 660,
    "image": "whopper.jpg"
  },
  {
    "name": "Cheeseburger",
    "price": 1.49,
    "calories": 300,
    "image": "cheeseburger.jpg"
  },
  {
    "name": "Chicken Royale",
    "price": 3.29,
    "calories": 440,
    "image": "chicken_royale.jpg"
  },
  {
    "name": "Spicy Chicken Sandwich",
    "price": 3.49,
    "calories": 480,
    "image": "spicy_chicken_sandwich.jpg"
  },
  {
    "name": "Fries",
    "price": 1.89,
    "calories": 365,
    "image": "french_fries.jpg"
  },
  {
    "name": "Onion Rings",
    "price": 2.29,
    "calories": 400,
    "image": "onion_rings.jpg"
  },
  {
    "name": "Coke",
    "price": 1.69,
    "calories": 140,
    "image": "coca_cola.jpg"
  },
  {
    "name": "Diet Coke",
    "price": 1.69,
    "calories": 0,
    "image": "diet_coke.jpg"
  }
];

const BurgerKing = () => {
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
      <div className='restaurant-info'>
        <h2>Store Name</h2>
        <p> Cuisine + Star + Ratings + Miles + Price</p>
        <table>
          <tr>
            <td>Delivery Fee</td>
            <td>Time</td>
          </tr>
          <tr>
            <td>$9.00</td>
            <td>30 mins</td>
          </tr>
        </table>
        <button>Save</button>
        <button>Group Order</button>
      </div>
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

export default BurgerKing;
