import React from 'react';
import GenreCard from '../components/GenreCard';
import { useNavigate } from 'react-router-dom';
import './MenuPage.css';

const MenuPage = () => {
  const navigate=useNavigate();
  const genres = [
    { name: 'Sci-Fi', image: 'scifi.jpg' },
    { name: 'Romance', image: 'romance.jpg' },
    { name: 'Animated', image: 'animated.jpg' },
    { name: 'Comedy', image: 'comedy.jpg' },
    { name: 'Disney', image: 'disney.jpg' },
    { name: 'Horror', image: 'horror.jpg' },
  ];

  return (
    <div className="menu-page">
      <h1 className="title">Select a Genre</h1>
      <div className="genre-grid">
        {genres.map((genre, index) => (
          <GenreCard key={index} genre={genre.name} image={genre.image} />
        ))}
      </div>
      <button className="start-button" onClick={()=>{navigate('/')}}>papapapapa</button>
    </div>
  );
};

export default MenuPage;