import { FaRegStar, FaStar, FaStarHalf } from '@/components/shared/icons'; // Make sure to import your icons correctly
import React, { useState } from 'react';

type StarProps = {
  value: number; // The rating value from 1 to 5, allowing for half values like 4.5
};

const Stars = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & StarProps
>(({ value }, ref) => {
  const [starsValue, setStarsValue] = useState<number>(value);

  // Function to generate an array representing full stars, half stars, and empty stars
  const renderStars = () => {
    const starIcons = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= starsValue) {
        // Full star if index is less than or equal to the rating
        starIcons.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - starsValue === 0.5) {
        // Half star if the difference between index and rating is 0.5
        starIcons.push(<FaStarHalf key={i} className="text-yellow-500" />);
      } else {
        // Empty star if index is greater than the rating
        starIcons.push(<FaRegStar key={i} className="text-gray-400" />);
      }
    }
    return starIcons;
  };

  return (
    <div ref={ref} className="flex gap-1">
      {renderStars()} {/* Render the stars based on the rating */}
    </div>
  );
});

export default Stars;
