import React from 'react';
import './index.css';
import restaurantList from './restaurantList';

function RestaurantCard() {
  if (!restaurantList || !Array.isArray(restaurantList)) {
    return <div>No restaurant data available.</div>;
  }

  return (
    <div className="restaurant-grid">
      {restaurantList.map((restaurant) => (
        <div className="restaurant-card" key={restaurant.name}>
          {restaurant.image && (
            <img className="restaurant-image" src={restaurant.image} alt={restaurant.name} />
          )}
          {restaurant.url && (
            <a href={restaurant.url}>
              <h2 className="restaurant-name">{restaurant.name}</h2>
            </a>
          )}
          <p className="restaurant-delivery-time">
            {restaurant.distance} mi. | {restaurant.deliveryTime} mins
          </p>
          <p className="restaurant-rating">Rating: {restaurant.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default RestaurantCard;
