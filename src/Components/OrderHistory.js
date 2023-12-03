import React, { useState, useEffect } from 'react';

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeOrderData = [
      { orderId: 1, totalAmount: 25.99, orderDate: '2023-12-01T10:30:00Z' },
      { orderId: 2, totalAmount: 39.95, orderDate: '2023-11-30T15:45:00Z' },
      { orderId: 3, totalAmount: 19.99, orderDate: '2023-11-28T18:20:00Z' },
    ];


    const delay = setTimeout(() => {
      setOrderHistory(fakeOrderData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  const handleLeaveReview = (orderId) => {
    console.log(`Leaving a review for order ${orderId}`);
  };

  const handleReorder = (orderId) => {
    console.log(`Reordering order ${orderId}`);
  };

  if (loading) {
    return <p>Loading order history...</p>;
  }

  return (
    <div>
      <h2>Order History</h2>
      {orderHistory.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orderHistory.map((order) => (
            <li key={order.orderId}>
              {/* Display relevant order information */}
              Order ID: {order.orderId}, Total: ${order.totalAmount.toFixed(2)}, Date: {order.orderDate}
              
              {/* Buttons for actions */}
              <button onClick={() => handleLeaveReview(order.orderId)}>Leave a Review</button>
              <button onClick={() => handleReorder(order.orderId)}>Reorder</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
