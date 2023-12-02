import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import './Components/index.css';
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
import PaneraBread from './Components/PaneraBread';
import OliveGarden from './Components/OliveGarden';
import TGIFridays from './Components/TGIFridays';
import Checkout from './Components/Checkout';
import LoginForm from './Components/LoginForm';
import ForgotPassword from './Components/ForgotPassword';
import CreateAccount from './Components/CreateAccount';
import Confirmation from './Components/Confirmation';
import AccountCreation from './Components/AccountCreation';
import RewardsTracking from './Components/RewardsTracking';
import AddDriverForm from './Components/addDriverForm';
import DriverPortal from './Components/DriverPortal';
import RestaurantPortal from './Components/RestaurantPortal';
import DashPass from './Components/dashpass';
import VerticalNavbar from './Components/VerticalNavbar';


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
      <Routes>
        <Route path="/" element={ <McDonalds/> } />
        <Route path="burger-king" element={ <BurgerKing/> } />
        <Route path="wendys" element={ <Wendys/> } />
        <Route path="in-and-out" element={ <InAndOut/> } />
        <Route path="chipotle" element={ <Chipotle/> } />
        <Route path="subway" element={ <Subway/> } />
        <Route path="panera-bread" element={ <PaneraBread/> } />
        <Route path="olive-garden" element={ <OliveGarden/> } />
        <Route path="tgi-fridays" element={ <TGIFridays/> } />
        <Route path="checkout" element={ <Checkout/> } />
        <Route path="confirmation" element={ <Confirmation/> } />
        <Route path="login" element={ <LoginForm/> } />
      </Routes>
      <VerticalNavbar />
      <div className="home-page">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
    
  );
}

export default App;

{/* <InAndOut />
<Chipotle />
<Subway />
<PaneraBread />
<OliveGarden />
<TGIFridays />
<Checkout />
<Confirmation />
<LoginForm />
<ForgotPassword />
<AccountCreation />
<CreateAccount />
<RewardsTracking />
<AddDriverForm />
<Footer />
<DriverPortal />
<RestaurantPortal />
<DashPass /> */}