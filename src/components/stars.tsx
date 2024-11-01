import { FaStar, FaStarHalf } from '@/components/shared/icons';
import React, { useState } from 'react';

type StarProps = {
  value: number;
  withReview?: boolean;
};

const Stars = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & StarProps
>(({ value, withReview }, ref) => {
  const [starsValue] = useState<number>(value);

  const renderStars = () => {
    const starIcons = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= starsValue) {
        starIcons.push(<FaStar key={i} className="text-[--chart-1]" />);
      } else if (i - starsValue === 0.5) {
        starIcons.push(<FaStarHalf key={i} className="text-[--chart-1]" />);
      }
      //  else {
      //   starIcons.push(<FaRegStar key={i} className="text-[--muted-foreground]" />);
      // }
    }
    return starIcons;
  };

  return (
    <div ref={ref} className="flex gap-1">
      <div className="flex items-baseline">
        <div className="flex">{renderStars()}</div>
        <div className="text-sm">{withReview && value.toString() + '/5'}</div>
      </div>
    </div>
  );
});

Stars.displayName = 'Stars';

export default Stars;
