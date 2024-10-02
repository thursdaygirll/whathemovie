import React from 'react';
import GenreCard from '../components/GenreCard';
import './MenuPage.css';

const MenuPage = () => {
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
      <div className="genre-grid">
        {genres.map((genre, index) => (
          <GenreCard key={index} genre={genre.name} image={genre.image} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;