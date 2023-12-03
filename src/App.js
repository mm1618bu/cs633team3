import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import './Components/index.css';
import './Components/DashPass.css';
import Header from './Components/Header';
//import Footer from './Components/Footer';
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
//import ForgotPassword from './Components/ForgotPassword';
import Confirmation from './Components/Confirmation';
//import RewardsTracking from './Components/RewardsTracking';
//import AddDriverForm from './Components/addDriverForm';
//import DriverPortal from './Components/DriverPortal';
//import RestaurantPortal from './Components/RestaurantPortal';
import DashPass from './Components/DashPass';
import VerticalNavbar from './Components/VerticalNavbar';
import DriverPortal from './Components/DriverPortal';
import IHOP from './Components/ihop';
import KFC from './Components/KFC';
import TacoBell from './Components/TacoBell';
import DairyQueen from './Components/DairyQueen';
import Dennys from './Components/Dennys';
import BuffaloWildWings from './Components/BuffaloWildWings';
import RegistrationForm from './Components/RegistrationForm';
import OrderHistory from './Components/OrderHistory';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Use the JSON data directly
    setRestaurants(restaurantsData);
    console.log(restaurantsData);
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
        <Route path="driver-portal" element={ <DriverPortal />}/>
        <Route path="buffalo-wild-wings" element={ <BuffaloWildWings/> }/>
        <Route path="dairy-queen" element={<DairyQueen/>}/>
        <Route path="dennys" element={<Dennys/>}/>
        <Route path="ihop" element={<IHOP/>}/>
        <Route path="kfc" element={<KFC/>}/>
        <Route path='taco-bell' element={<TacoBell/>}/>
        <Route path='registration' element={<RegistrationForm/>}/>
        <Route path='order-history' element={<OrderHistory/>}/>
        <Route path='dashpass' element={<DashPass/>}/>
      </Routes>
      <VerticalNavbar />
      <RestaurantCard />
    </div>
    
  );
}

export default App;

/*{/* <InAndOut />
<Chipotle />
<Subway />
<PaneraBread />
<OliveGarden />
<TGIFridays />
<Checkout />
<Confirmation />
<LoginForm />
<ForgotPassword />
<RewardsTracking />
<AddDriverForm />
<Footer />
<DriverPortal />
<RestaurantPortal />
<DashPass /> }*/