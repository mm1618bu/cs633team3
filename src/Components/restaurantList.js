import PaneraBread from "../img/logos/panera_bread.png";
import OliveGarden from "../img/logos/olive_garden.svg";
import TGIFridays from "../img/logos/tgi_fridays.png";
import BuffaloWildWings from "../img/logos/buffalo_wild_wings.png";
import BurgerKing from "../img/logos/Burger_king.png";
import DairyQueen from "../img/logos/dairy_queen.png";
import Dennys from "../img/logos/denny's.jpeg";
import IHOP from "../img/logos/ihop.png";
import InAndOut from "../img/logos/in-n-out.png";
import KFC from "../img/logos/kfc.png";
import McDonalds from "../img/logos/mcdonald's.jpeg";
import PizzaHut from "../img/logos/pizza_hut.png";
import RedLobster from "../img/logos/red_lobster.jpeg";
import TacoBell from "../img/logos/tacobell.png";
import Wendys from "../img/logos/wendy's.png";
import Chipotle from "../img/logos/chipotle.png";

const restaurantList = [
    {
      "name": "Panera Bread",
      "rating": 2.8,
      "distance": 4.3,
      "deliveryTime": 43,
      "cuisine": "Somali",
      "image": PaneraBread,
      "url": "/panera-bread"
    },
    {
      "name": "Olive Garden",
      "rating": 1.9,
      "distance": 3.3,
      "deliveryTime": 24,
      "cuisine": "Italian",
      "image":OliveGarden,
      "url": "/olive-garden"
    },
    {
      "name": "TGI Fridays",
      "rating": 1.8,
      "distance": 6.1,
      "deliveryTime": 40,
      "cuisine": "American",
      "image": TGIFridays,
      "url": "/tgi-fridays"
    },
    {
      "name": "Pizza Hut",
      "rating": 3.5,
      "distance": 7.9,
      "deliveryTime": 53,
      "cuisine": "Pizza",
      "image": PizzaHut,
      "url": "/pizza-hut"
    },
    {
      "name": "KFC",
      "rating": 4.1,
      "distance": 6.2,
      "deliveryTime": 3,
      "cuisine": "Fast Food",
      "image": KFC,
      "url": "/kfc"
    },
    {
      "name": "IHOP",
      "rating": 3.2,
      "distance": 1.6,
      "deliveryTime": 52,
      "cuisine": "American",
      "image": IHOP,
      "url": "/ihop"
    },
    {
      "name": "Denny's",
      "rating": 4.3,
      "distance": 4.1,
      "deliveryTime": 46,
      "cuisine": "American",
      "image": Dennys,
      "url": "/dennys"
    },
    {
      "name": "Dairy Queen",
      "rating": 0.3,
      "distance": 3.8,
      "deliveryTime": 2,
      "cuisine": "Fast Food",
      "image": DairyQueen,
      "url": "/dairy-queen"
    },
    {
      "name": "Buffalo Wild Wings",
      "rating": 2.9,
      "distance": 4.7,
      "deliveryTime": 21,
      "cuisine": "American",
      "image": BuffaloWildWings,
      "url": "/buffalo-wild-wings"
    },
    {
      "name": "Taco Bell",
      "rating": 3.9,
      "distance": 8.6,
      "deliveryTime": 42,
      "cuisine": "Mexican",
      "image": TacoBell,
      "url": "/taco-bell"
    },
    {
      "name": "Red Lobster",
      "rating": 5.0,
      "distance": 1.5,
      "deliveryTime": 11,
      "cuisine": "Seafood",
      "image": RedLobster,
      "url": "/red-lobster"
    },
    {
      "name": "McDonald's",
      "rating": 2.5,
      "distance": 3.5,
      "deliveryTime": 15,
      "cuisine": "Fast Food",
      "image": McDonalds,
      "url": "/"
    },
    {
      "name": "Burger King",
      "rating": 2.2,
      "distance": 2.8,
      "deliveryTime": 10,
      "cuisine": "Fast Food",
      "image": BurgerKing,
      "url": "/burger-king"
    },
    {
      "name": "Wendy's",
      "rating": 3.0,
      "distance": 4.2,
      "deliveryTime": 20,
      "cuisine": "Fast Food",
      "image": Wendys,
      "url": "/wendys"
    },
    {
      "name": "Chipotle",
      "rating": 4.0,
      "distance": 5.1,
      "deliveryTime": 25,
      "cuisine": "Mexican",
      "image": Chipotle,
      "url": "/chipotle"
    },
    {
      "name": "In-N-Out Burger",
      "rating": 4.6,
      "distance": 7.3,
      "deliveryTime": 30,
      "cuisine": "Fast Food",
      "image": InAndOut,
      "url": "/innout"
    }
  ];

  export default restaurantList;