// ArtistCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ArtistCard.css';

const ArtistCard = ({ id, imagen }) => {
  return (
    <div className="artist-card">
      <Link to={`/albumes/${id}`}>
        <div id="i">
          <img src={imagen} alt="Artista" />
        </div>
      </Link>
    </div>
  );
};

export default ArtistCard;