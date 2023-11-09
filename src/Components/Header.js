import React from 'react';

function Header() {
  return (
    <div className="topheader">
      <div className="top-logo-container">
        <img
          className="logo"
          src="https://cdn.doordash.com/media/channel_icons/brand-mark-square.png"
          alt="DoorDash Logo"
        />
      </div>
      <div className="top-options">
        <div className="top-pickup-delivery-options">
          <label>
            <input type="radio" name="pickup-delivery" value="pickup" /> Pickup
          </label>
          <label>
            <input type="radio" name="pickup-delivery" value="delivery" /> Delivery
          </label>
        </div>
        <div className="top-search-bar">
          <input type="text" placeholder="Search for restaurants or cuisines" />
          <button id="top-button">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
