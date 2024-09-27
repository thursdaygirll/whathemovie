import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GenreCard.css';

const GenreCard = ({ genre, image }) => {
  const navigate = useNavigate();

  return (
    <div className="genre-card" onClick={() => navigate(`/genre/${genre}`)}>
      <img src={image} alt={genre} />
      <div className="genre-text">{genre}</div>
    </div>
  );
};

export default GenreCard;