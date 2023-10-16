import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import RestaurantCard from './RestaurantCard';
import Footer from './Footer';
import restaurantsData from './restaurantList.json';
import FoodCategoryList from './FoodCategoryList';
import McDonalds from './McDonalds';
import BurgerKing from './BurgerKing';
import InAndOut from './InAndOut';
import Subway from './Subway';
import Wendys from './Wendys';
import Chipotle from './Chipotle';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Use the JSON data directly
    setRestaurants(restaurantsData);
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className="App">
      <Header />
      <FoodCategoryList />
      <McDonalds />
      <BurgerKing />
      <Wendys />
      <InAndOut />
      <Chipotle />
      <Subway />
      <Footer />
      <div className="home-page">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
    
  );
}

export default App;
