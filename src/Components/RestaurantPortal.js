import React, { useState, useRef } from 'react';
import './index.css';

const RestaurantPortal = () => {
  const [orders, setOrders] = useState([
    {
      "id": 1,
      "customer": "Customer A",
      "items": ["Burger", "Fries", "Soda"],
      "total": 20.00,
      "status": "Pending"
    },
    {
      "id": 2,
      "customer": "Customer B",
      "items": ["Pizza", "Salad", "Water"],
      "total": 25.00,
      "status": "Pending"
    },
    {
      "id": 3,
      "customer": "Customer C",
      "items": ["Sandwich", "Chips", "Iced Tea"],
      "total": 15.50,
      "status": "Pending"
    },
    {
      "id": 4,
      "customer": "Customer D",
      "items": ["Steak", "Mashed Potatoes", "Wine"],
      "total": 45.00,
      "status": "Pending"
    },
    {
      "id": 5,
      "customer": "Customer E",
      "items": ["Sushi", "Sake", "Edamame"],
      "total": 30.00,
      "status": "Pending"
    },
    {
      "id": 6,
      "customer": "Customer F",
      "items": ["Taco", "Guacamole", "Margarita"],
      "total": 18.75,
      "status": "Pending"
    },
    {
      "id": 7,
      "customer": "Customer G",
      "items": ["Chicken Wings", "Onion Rings", "Beer"],
      "total": 22.00,
      "status": "Pending"
    },
    {
      "id": 8,
      "customer": "Customer H",
      "items": ["Pasta", "Garlic Bread", "Soft Drink"],
      "total": 16.25,
      "status": "Pending"
    },
    {
      "id": 9,
      "customer": "Customer I",
      "items": ["Tofu Stir-Fry", "Brown Rice", "Green Tea"],
      "total": 13.50,
      "status": "Pending"
    },
    {
      "id": 10,
      "customer": "Customer J",
      "items": ["Sub Sandwich", "Chips", "Iced Coffee"],
      "total": 12.00,
      "status": "Pending"
    }
  ]);

  // Function to accept an order
  const acceptOrder = (order) => {
    setOrders((prevOrders) => {
      return prevOrders.map((o) => (o.id === order.id ? { ...o, status: 'Accepted' } : o));
    });
  };

  // Function to mark an order as completed
  const completeOrder = (order) => {
    setOrders((prevOrders) => {
      return prevOrders.map((o) => (o.id === order.id ? { ...o, status: 'Completed' } : o));
    });
  };

  // Function to mark an order as picked up by the driver
  const markPickedUp = (order) => {
    setOrders((prevOrders) => {
      return prevOrders.map((o) => (o.id === order.id ? { ...o, status: 'Picked Up' } : o));
    });
  };

  // Function to stock out of an item
  const stockOutItem = (order, item) => {
    setOrders((prevOrders) => {
      return prevOrders.map((o) => {
        if (o.id === order.id && o.items.includes(item)) {
          const updatedItems = o.items.filter((i) => i !== item);
          return { ...o, items: updatedItems };
        }
        return o;
      });
    });
  };

  const [newPrice, setNewPrice] = useState(null);
  const newPriceInputRef = useRef(null);

  const handlePriceChange = (order) => {
    setNewPrice(null); // Clear any previous input value
    newPriceInputRef.current.value = order.total; // Set the input value to the current order's total
    setNewPrice(order.total); // Set the state with the current order's total
  };

  const handleChangePrice = (order) => {
    // Prompt the user for a new price
    handlePriceChange(order);
  };

  const handleConfirmPriceChange = (order) => {
    // Update the price with the new value
    changePrice(order, parseFloat(newPrice)); // Parse the input as a float
    setNewPrice(null); // Clear the input and state
  };

  const changePrice = (order, newPrice) => {
    setOrders((prevOrders) => {
      return prevOrders.map((o) => (o.id === order.id ? { ...o, total: newPrice } : o));
    });
  };

  return (
    <div id='store'>
      <h1>Restaurant Portal</h1>
      <table id='store-table'>
        <thead id='store-table-head'>
          <tr>
            <th>Customer</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.customer}</td>
              <td>{order.items.join(', ')}</td>
              <td>${order.total.toFixed(2)}</td>
              <td>{order.status}</td>
              <td>
                {order.status === 'Pending' && (
                  <button onClick={() => acceptOrder(order)}>Accept</button>
                )}
                {order.status === 'Accepted' && (
                  <button onClick={() => completeOrder(order)}>Complete</button>
                )}
                {order.status === 'Completed' && (
                  <button onClick={() => markPickedUp(order)}>Mark Picked Up</button>
                )}
                <button onClick={() => stockOutItem(order, 'Burger')}>Stock Out</button>
                {newPrice === order.total ? (
                  <div>
                    <input
                      type="number"
                      ref={newPriceInputRef}
                      onChange={(e) => setNewPrice(e.target.value)}
                    />
                    <button onClick={() => handleConfirmPriceChange(order)}>Confirm</button>
                  </div>
                ) : (
                  <button onClick={() => handleChangePrice(order)}>Change Price</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantPortal;
