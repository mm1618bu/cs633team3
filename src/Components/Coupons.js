// Coupons.js

import React from 'react';
import './index.css'; // Import the CSS file for styling

const Coupons = () => {
  return (
    <div className="coupons-container">
      <div className="coupon">
        <h3>Coupon 1</h3>
        <p>Get 20% off your first order!</p>
        <button>Apply</button>
      </div>
      <div className="coupon">
        <h3>Coupon 2</h3>
        <p>Free delivery on orders over $50!</p>
        <button>Apply</button>
      </div>
    </div>
  );
};

export default Coupons;
