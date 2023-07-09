import React, { useState } from 'react';
import UiStarRating from './ui';
import { RatingProps } from './types';

const DEF_RATING = 4;

const Rating = ({ rating = DEF_RATING, title = '', reviewCount = 0 }: RatingProps) => {
  const [customRating, setCustomRating] = useState(rating);
  const [hover, setHover] = useState(rating);

  return (
    <UiStarRating.Wrapper>
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

      <UiStarRating.Title>{`${reviewCount} ${title}`}</UiStarRating.Title>
    </UiStarRating.Wrapper>
  );
};

export default Rating;
