import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-column">
        <h2>Get to Know Us</h2>
        <ul>
          <li>About us</li>
          <li>Careers</li>
          <li>Promotions</li>
          <li>Investors</li>
          <li>Merchant Blog</li>
          <li>Accessibility</li>
          <li>Linked in</li>
        </ul>
      </div>

      <div className="footer-column">
        <h2>Let Us Help You</h2>
        <ul>
          <li>Account Details</li>
          <li>Order History</li>
          <li>Help</li>
        </ul>
      </div>

      <div className="footer-column">
        <h2>Doing Business</h2>
        <ul>
          <li>Become a Dasher</li>
          <li>List Your Business</li>
          <li>Get Dashers for Deliveries</li>
          <li>Get DoorDash for Work</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
