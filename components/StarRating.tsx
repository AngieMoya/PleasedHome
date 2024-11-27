'use client';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface StarRatingProps {
  totalStars?: number;
  rate?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState<number>(0);

  const handleClick = (index: number) => {
    setRating(index + 1);
  };

  return (
    <div className="flex">
      {Array.from({ length: totalStars }, (_, index) => (
        <Star key={index} filled={index < rating} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

interface StarProps {
  filled: boolean;
  onClick: () => void;
}

const Star: React.FC<StarProps> = ({ filled, onClick }) => {
  return (
    <FontAwesomeIcon
      icon={faStar}
      onClick={onClick}
      className={`cursor-pointer transition-colors duration-300 ${filled ? 'text-yellow-400' : 'text-gray-400'}`}
      size="lg"
    />
  );
};

export default StarRating;
