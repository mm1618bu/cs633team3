import React from 'react';

function VerticalNavbar() {
  const items = [
    'Home',
    'Pickup',
    'Offers',
    'Orders',
    'Account',
    'Saved Stores',
    'Payment',
    'Gift Card',
    'Help',
    'Sign Out',
    'Language',
  ];

  return (
    <div className="vertical-navbar">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default VerticalNavbar;