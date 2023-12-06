import React from 'react';
import Wrapf from '../img/Wrapf.png';
import Spaghettif from '../img/Spaghettif.png';
import Hamburgerf from '../img/Hamburgerf.png';
import indianf from '../img/indianf.png';
import Sandwichf from '../img/Sandwichf.png';
import Tacof from '../img/Tacof.png';
import Chinesef from '../img/Chinesef.png';
import Pizzaf from '../img/Pizzaf.png';
import Cakef from '../img/Cakef.png';
import './index.css';

const FoodCategoryList = () => {
  const categories = [
    {
      name: 'Continental',
      image: Wrapf,
    },
    {
      name: 'Italian',
      image: Spaghettif,
    },
    {
      name: 'Burgers',
      image: Hamburgerf,
    },
    {
      name: 'Indian',
      image: indianf,
    },
    {
      name: 'Sandwiches',
      image: Sandwichf,
    },
    {
      name: 'Mexican',
      image: Tacof,
    },
    {
      name: 'Chinese',
      image: Chinesef,
    },
    {
      name: 'Pizza',
      image: Pizzaf,
    },
    {
      name: 'Desserts',
      image: Cakef,
    },
  ];

  return (
    <div className="food-category-list">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          <div className="image-container">
            <img src={category.image} alt={category.name} />
          </div>
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodCategoryList;
