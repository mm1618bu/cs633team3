import React from 'react';
import imgitalian from '../img/italian.png';
import imgwrap from '../img/wrap.png';
import './index.css';

const FoodCategoryList = () => {
  const categories = [
    {
        name: 'Fruits',
        image: imgitalian,
      },
      {
        name: 'Vegetables',
        image: imgitalian,
      },
      {
        name: 'Meat',
        image: imgitalian,
      },
      {
        name: 'Fruits',
        image: imgitalian,
      },
      {
        name: 'Vegetables',
        image: imgitalian,
      },
      {
        name: 'Meat',
        image: imgwrap,
      },
      {
        name: 'Fruits',
        image: imgwrap,
      },
      {
        name: 'Vegetables',
        image: imgwrap,
      },
      {
        name: 'Meat',
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
