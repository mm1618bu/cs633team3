import React, { useState, useEffect } from 'react';

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeOrderData = [
      { orderId: 1, amount: 24.00, orderDate: '12/01/2023' },
      { orderId: 2, amount: 25.00, orderDate: '12/02/2023' },
      { orderId: 3, amount: 26.00, orderDate: '12/03/2023' },
    ];


    const delay = setTimeout(() => {
      setOrderHistory(fakeOrderData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);


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
              Order ID: {order.orderId}, Total: ${order.amount.toFixed(2)}, Date: {order.orderDate}
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
