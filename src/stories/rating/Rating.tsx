import React, { useState } from 'react';
import UiStarRating from './ui';

interface RatingProps {
  rating: number;
}

const DEF_RATING = 4;

const Rating = ({ rating = DEF_RATING }: RatingProps) => {
  const [customRating, setCustomRating] = useState(rating);
  const [hover, setHover] = useState(rating);

  return (
    <UiStarRating>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || customRating) ? 'on' : 'off'}
            onClick={() => setCustomRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(customRating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </UiStarRating>
  );
};

export default Rating;
