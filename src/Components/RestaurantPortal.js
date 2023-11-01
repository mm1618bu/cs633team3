import React, { useState } from 'react';

const RestaurantPortal = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: 'Customer A',
      items: ['Burger', 'Fries', 'Soda'],
      total: 20.00,
      status: 'Pending',
    },
    // Add more orders here
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

  // Function to change the price of an order
  const changePrice = (order, newPrice) => {
    setOrders((prevOrders) => {
      return prevOrders.map((o) => (o.id === order.id ? { ...o, total: newPrice } : o));
    });
  };

  return (
    <div>
      <h1>Restaurant Portal</h1>
      <table>
        <thead>
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
                <button onClick={() => changePrice(order, 25.00)}>Change Price</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantPortal;
