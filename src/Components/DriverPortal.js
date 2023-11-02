import React, { useState } from 'react';

const DriverPortal = () => {
  const [availableOrders, setAvailableOrders] = useState([
        {
          "id": 1,
          "store": "Store A",
          "customer": "Customer X",
          "total": 25.00,
          "tip": 5.00
        },
        {
          "id": 2,
          "store": "Store B",
          "customer": "Customer Y",
          "total": 30.00,
          "tip": 6.00
        },
        {
          "id": 3,
          "store": "Store C",
          "customer": "Customer Z",
          "total": 40.00,
          "tip": 8.00
        },
        {
          "id": 4,
          "store": "Store D",
          "customer": "Customer W",
          "total": 22.50,
          "tip": 4.50
        },
        {
          "id": 5,
          "store": "Store E",
          "customer": "Customer V",
          "total": 15.00,
          "tip": 3.00
        },
        {
          "id": 6,
          "store": "Store F",
          "customer": "Customer U",
          "total": 50.00,
          "tip": 10.00
        },
        {
          "id": 7,
          "store": "Store G",
          "customer": "Customer T",
          "total": 27.50,
          "tip": 5.50
        },
        {
          "id": 8,
          "store": "Store H",
          "customer": "Customer S",
          "total": 35.00,
          "tip": 7.00
        },
        {
          "id": 9,
          "store": "Store I",
          "customer": "Customer R",
          "total": 12.00,
          "tip": 2.40
        },
        {
          "id": 10,
          "store": "Store J",
          "customer": "Customer Q",
          "total": 60.00,
          "tip": 12.00
        },
        {
          "id": 11,
          "store": "Store K",
          "customer": "Customer P",
          "total": 18.75,
          "tip": 3.75
        }
      ]
      
    // Add more available orders here
  );

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
              <li id="confirm-cart" key={order.id}>
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
              <li id="confirm-cart" key={order.id}>
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
              <li id="confirm-cart" key={order.id}>
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
