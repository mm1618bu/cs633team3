import React from 'react';
import './index.css';
import restaurantsData from './restaurantList.json';

function RestaurantCard() {
  // Make sure that restaurantsData is defined and is an array
  if (!restaurantsData || !Array.isArray(restaurantsData)) {
    // Handle the case where data is missing or not an array
    return <div>No restaurant data available.</div>; // You can customize the message
  }

  return (
    <div className="restaurant-grid">
      {restaurantsData.map((restaurant, index) => (
        <div className="restaurant-card" key={index}>
          <img className="restaurant-image" src={restaurant.image} alt={restaurant.name} />
          <a href={restaurant.url}><h2 className="restaurant-name">{restaurant.name} &copy;</h2></a>
          <p className="restaurant-delivery-time"> {restaurant.distance} mi. * {restaurant.deliveryTime} mins</p>
          <p className="restaurant-rating">{restaurant.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default RestaurantCard;
