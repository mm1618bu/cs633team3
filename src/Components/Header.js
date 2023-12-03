import React from 'react';
import imgfooder from '../img/fooder.png';
function Header() {
  return (
    <div className="topheader">
      <div className="top-logo-container">
        <a href="/">
        <img
          className="logo"
          src= {imgfooder}
          alt="DoorDash Logo"
        /></a>      
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
