/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

interface RatingProps {
  onRatingSelect: (rating: number) => void;
}

import { FaStar } from '@/components/shared/icons'; // Ensure this path is correct

const RatingProduct: React.FC<RatingProps> = ({ onRatingSelect }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
    onRatingSelect(value);
  };

  const handleMouseEnter = (value: number) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          style={{
            cursor: 'pointer',
            color: star <= (hoverRating || rating) ? 'gold' : 'gray',
          }}
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default RatingProduct;
