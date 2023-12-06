import React from 'react';
import imgitalian from '../img/italian.png';
import imgwrap from '../img/wrap.png';
import './index.css';

const FoodCategoryList = () => {
  const categories = [
    {
        name: 'Continental',
        image: imgitalian,
      },
      {
        name: 'Italian',
        image: imgitalian,
      },
      {
        name: 'Burgers',
        image: imgitalian,
      },
      {
        name: 'Indian',
        image: imgitalian,
      },
      {
        name: 'Sandwiches',
        image: imgitalian,
      },
      {
        name: 'Mexican',
        image: imgwrap,
      },
      {
        name: 'Chinese',
        image: imgwrap,
      },
      {
        name: 'Pizza',
        image: imgwrap,
      },
      {
        name: 'Desserts',
        image: imgwrap,
      },

  ];

  return (
    <div className="food-category-list">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          <img src={category.image} alt="missing" />
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodCategoryList;
