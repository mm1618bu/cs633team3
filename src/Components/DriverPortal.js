import React, { useState } from 'react';

const DriverPortal = () => {
  const [availableOrders, setAvailableOrders] = useState([
        {
          "id": 1,
          "store": "Store A",
          "customer": "Customer X",
          "Address": "123 Main St",
          "total": 25.00,
          "tip": 5.00
        },
        {
          "id": 2,
          "store": "Store B",
          "customer": "Customer Y",
          "Address": "123 Main St",
          "total": 30.00,
          "tip": 6.00
        },
        {
          "id": 3,
          "store": "Store C",
          "customer": "Customer Z",
          "Address": "123 Main St",
          "total": 40.00,
          "tip": 8.00
        },
        {
          "id": 4,
          "store": "Store D",
          "customer": "Customer W",
          "Address": "123 Main St",
          "total": 22.50,
          "tip": 4.50
        },
        {
          "id": 5,
          "store": "Store E",
          "customer": "Customer V",
          "Address": "123 Main St",
          "total": 15.00,
          "tip": 3.00
        },
        {
          "id": 6,
          "store": "Store F",
          "customer": "Customer U",
          "Address": "123 Main St",
          "total": 50.00,
          "tip": 10.00
        },
        {
          "id": 7,
          "store": "Store G",
          "customer": "Customer T",
          "Address": "123 Main St",
          "total": 27.50,
          "tip": 5.50
        },
        {
          "id": 8,
          "store": "Store H",
          "customer": "Customer S",
          "Address": "123 Main St",
          "total": 35.00,
          "tip": 7.00
        },
        {
          "id": 9,
          "store": "Store I",
          "customer": "Customer R",
          "Address": "123 Main St",
          "total": 12.00,
          "tip": 2.40
        },
        {
          "id": 10,
          "store": "Store J",
          "customer": "Customer Q",
          "Address": "123 Main St",
          "total": 60.00,
          "tip": 12.00
        },
        {
          "id": 11,
          "store": "Store K",
          "customer": "Customer P",
          "Address": "123 Main St",
          "total": 18.75,
          "tip": 3.75
        }
      ]
  );

  const [pickedUpOrders, setPickedUpOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [deniedOrders, setDeniedOrders] = useState([]);


  const pickUpOrder = (order) => {
    setAvailableOrders(availableOrders.filter((o) => o.id !== order.id));
    setPickedUpOrders([...pickedUpOrders, order]);
  };


  const completeOrder = (order) => {
    setPickedUpOrders(pickedUpOrders.filter((o) => o.id !== order.id));
    setCompletedOrders([...completedOrders, order]);
  };

  const denyOrder = (order) => {
    setAvailableOrders(availableOrders.filter((o) => o.id !== order.id));
    setPickedUpOrders(pickedUpOrders.filter((o) => o.id !== order.id));
    setCompletedOrders(completedOrders.filter((o) => o.id !== order.id));
    setDeniedOrders([...deniedOrders, order]);
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
                <p>Order #: {order.id}</p>
                <p>Store: {order.store}</p>
                <p>Customer: {order.customer}</p>
                <p>Address: {order.Address}</p>
                <p>Total: ${order.total}</p>
                <p>Tip: ${order.tip}</p>
                <button onClick={() => pickUpOrder(order)}>Pick Up</button>
                <button onClick={() => denyOrder(order)}>Deny</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-tab">
          <h2>Picked Up Orders</h2>
          <ul>
            {pickedUpOrders.map((order) => (
              <li id="confirm-cart" key={order.id}>
                <p>Order #: {order.id}</p>
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
                <p>Order #: {order.id}</p>
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
