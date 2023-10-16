import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import FoodCategoryList from './Components/FoodCategoryList';
import McDonalds from './Components/McDonalds';
import BurgerKing from './Components/BurgerKing';
import Wendys from './Components/Wendys';
import InAndOut from './Components/InAndOut';
import Chipotle from './Components/Chipotle';
import Subway from './Components/Subway';
import RestaurantCard from './Components/RestaurantCard';
import restaurantsData from './Components/restaurantList.json';

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
