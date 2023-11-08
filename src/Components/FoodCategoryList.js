import React from 'react';
import './index.css';

const FoodCategoryList = () => {
  const categories = [
    {
        name: 'Fruits',
        image: '../img/italian.png',
      },
      {
        name: 'Vegetables',
        image: './src/vegetables.jpg',
      },
      {
        name: 'Meat',
        image: './src/meat.jpg',
      },
      {
        name: 'Fruits',
        image: '../img/italian.png',
      },
      {
        name: 'Vegetables',
        image: './src/vegetables.jpg',
      },
      {
        name: 'Meat',
        image: './src/meat.jpg',
      },
      {
        name: 'Fruits',
        image: '../img/italian.png',
      },
      {
        name: 'Vegetables',
        image: './src/vegetables.jpg',
      },
      {
        name: 'Meat',
        image: './src/meat.jpg',
      },
    // Add more categories and images as needed
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
