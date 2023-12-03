import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      user: 'John Doe',
      rating: 4,
      comment: 'Great food and fast delivery!',
    },
    {
      id: 2,
      user: 'Jane Smith',
      rating: 5,
      comment: 'Excellent service and delicious meals!',
    },
  ];

  return (
    <div className="reviews-container">
      <h2>Customer Reviews</h2>
      <ul className="reviews-list">
        {reviewsData.map((review) => (
          <li key={review.id} className="review-item">
            <div className="review-header">
              <p>{review.user}</p>
              <p>{`Rating: ${review.rating}/5`}</p>
            </div>
            <p className="review-comment">{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
