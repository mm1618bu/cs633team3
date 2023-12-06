import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import imgfooder from '../img/fooder.png';

function Header() {
  const [firstDropdownVisible, setFirstDropdownVisible] = useState(false);
  const [secondDropdownVisible, setSecondDropdownVisible] = useState(false);

  const toggleFirstDropdown = () => {
    setFirstDropdownVisible(!firstDropdownVisible);
    setSecondDropdownVisible(false); // Close the other dropdown
  };

  const toggleSecondDropdown = () => {
    setSecondDropdownVisible(!secondDropdownVisible);
    setFirstDropdownVisible(false); // Close the other dropdown
  };

  // Define arrays for each dropdown
  const firstDropdownLinks = [
    { to: "confirmation", label: "Confirmation" },
    { to: "checkout", label: "Checkout" },
    { to: "login", label: "Login" },
    { to: "driver-portal", label: "Driver Portal" },
    { to: "registration", label: "Registration" },
    { to: "order-history", label: "Order History" },
    { to: "dashpass", label: "Food Pass" },
    { to: "benefits", label: "Benefits" },
    { to: "Coupons", label: "Coupons" },
  ];

  const secondDropdownLinks = [
    { to: "/", label: "McDonalds" },
    { to: "burger-king", label: "Burger King" },
    { to: "wendys", label: "Wendys" },
    { to: "in-and-out", label: "In And Out" },
    { to: "chipotle", label: "Chipotle" },
    { to: "subway", label: "Subway" },
    { to: "panera-bread", label: "Panera Bread" },
    { to: "olive-garden", label: "Olive Garden" },
    { to: "tgi-fridays", label: "Tgi Fridays" },
    { to: "buffalo-wild-wings", label: "Wild Wings" },
    { to: "dairy-queen", label: "Dairy Queen" },
    { to: "dennys", label: "Dennys" },
    { to: "ihop", label: "I Hop" },
    { to: "kfc", label: "KFC" },
    { to: "taco-bell", label: "Taco Bell" },
    // Add more links for the second dropdown
  ];

  return (
    <div className="topheader">
      <div className="top-logo-container">
        <Link to="home">
          <img
            className="logo"
            src={imgfooder}
            alt="Fooder Logo"
          />
        </Link>
      </div>
      <div className="top-options">
        <div className="top-pickup-delivery-options">
          {/* Your existing pickup and delivery options */}
        </div>
        <div className="top-search-bar">
          <input type="text" placeholder="Search for restaurants or cuisines" />
          <Link to="RestaurantCard">
            <button id="top-button">Search</button>
          </Link>
        </div>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleFirstDropdown}>
           || 
          </button>
          {firstDropdownVisible && (
            <div className="dropdown-content">
              {firstDropdownLinks.map((link, index) => (
                <Link key={index} to={link.to}>{link.label}</Link>
              ))}
            </div>
          )}
        </div>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleSecondDropdown}>
            |||
          </button>
          {secondDropdownVisible && (
            <div className="dropdown-content">
              {secondDropdownLinks.map((link, index) => (
                <Link key={index} to={link.to}>{link.label}</Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
