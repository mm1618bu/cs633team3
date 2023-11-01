import React, { useState } from 'react';

const DriverPortal = () => {
  const [availableOrders, setAvailableOrders] = useState([
    {
      id: 1,
      store: 'Store A',
      customer: 'Customer X',
      total: 25.00,
      tip: 5.00,
    },
    // Add more available orders here
  ]);

  const [pickedUpOrders, setPickedUpOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);

  // Function to move an order to the "Picked Up" tab
  const pickUpOrder = (order) => {
    setAvailableOrders(availableOrders.filter((o) => o.id !== order.id));
    setPickedUpOrders([...pickedUpOrders, order]);
  };

  // Function to move a picked up order to the "Completed" tab
  const completeOrder = (order) => {
    setPickedUpOrders(pickedUpOrders.filter((o) => o.id !== order.id));
    setCompletedOrders([...completedOrders, order]);
  };

  return (
    <div>
      <h1>Driver Portal</h1>
      <div className="order-tabs">
        <div className="order-tab">
          <h2>Available Orders</h2>
          <ul>
            {availableOrders.map((order) => (
              <li key={order.id}>
                <p>Store: {order.store}</p>
                <p>Customer: {order.customer}</p>
                <p>Total: ${order.total}</p>
                <p>Tip: ${order.tip}</p>
                <button onClick={() => pickUpOrder(order)}>Pick Up</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-tab">
          <h2>Picked Up Orders</h2>
          <ul>
            {pickedUpOrders.map((order) => (
              <li key={order.id}>
                <p>Store: {order.store}</p>
                <p>Customer: {order.customer}</p>
                <p>Total: ${order.total}</p>
                <p>Tip: ${order.tip}</p>
                <button onClick={() => completeOrder(order)}>Complete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-tab">
          <h2>Completed Orders</h2>
          <ul>
            {completedOrders.map((order) => (
              <li key={order.id}>
                <p>Store: {order.store}</p>
                <p>Customer: {order.customer}</p>
                <p>Total: ${order.total}</p>
                <p>Tip: ${order.tip}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DriverPortal;
