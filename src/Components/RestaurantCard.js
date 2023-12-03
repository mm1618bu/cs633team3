import React from 'react';
import './index.css';
import restaurantsData from './restaurantList.json';

function RestaurantCard() {
  if (!restaurantsData || !Array.isArray(restaurantsData)) {
    return <div>No restaurant data available.</div>;
  }

  return (
    <div className="restaurant-grid">
      {restaurantsData.map((restaurant) => (
        <div className="restaurant-card" key={restaurant.name}>
          {restaurant.image && (
            <img className="restaurant-image" src={process.env.PUBLIC_URL + restaurant.image} alt={restaurant.name} />
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
