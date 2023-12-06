import React, { useState } from 'react';
import './index.css'; 
import OrderShoppingCart from './OrderShoppingCart';
import Reviews from './Reviews';

const foodItems = [
  {
      "name": "Fettuccine Alfredo",
      "description": "Fettuccine pasta with a creamy Alfredo sauce.",
      "price": 12.99,
      "calories": 830,
      "image": "fettuccine_alfredo.jpg"
  },
  {
      "name": "Tour of Italy",
      "description": "Lasagna, Chicken Parmesan, and Fettuccine Alfredo.",
      "price": 17.99,
      "calories": 1520,
      "image": "tour_of_italy.jpg"
  },
  {
      "name": "Chicken Alfredo",
      "description": "Grilled chicken with fettuccine pasta and Alfredo sauce.",
      "price": 14.99,
      "calories": 1200,
      "image": "chicken_alfredo.jpg"
  },
  {
      "name": "Unlimited Soup, Salad, and Breadsticks",
      "description": "Endless servings of soup, salad, and breadsticks.",
      "price": 9.99,
      "calories": 750,
      "image": "unlimited_ssb.jpg"
  },
  {
      "name": "Eggplant Parmigiana",
      "description": "Breaded eggplant topped with marinara and mozzarella cheese over spaghetti.",
      "price": 13.99,
      "calories": 980,
      "image": "eggplant_parmigiana.jpg"
  },
  {
      "name": "Tiramisu",
      "price": 6.99,
      "calories": 320,
      "image": "tiramisu.jpg"
  },
  {
      "name": "Peach Iced Tea",
      "price": 2.49,
      "calories": 100,
      "image": "peach_iced_tea.jpg"
  },
  {
      "name": "Italian Margarita",
      "price": 8.99,
      "calories": 280,
      "image": "italian_margarita.jpg"
  }
];

const OliveGarden = () => {
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
      <img src="../img/Olive_GardenH.jpeg" alt="Restaurant Image" />

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

export default OliveGarden;
