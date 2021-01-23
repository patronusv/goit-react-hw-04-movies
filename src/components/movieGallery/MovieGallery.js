import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
const MovieGallery = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(item => (
        <li key={item.id}>
          <NavLink
            to={{
              pathname: '/movies/details',
              state: { from: location.pathname },
            }}
          >
            {item.name ? item.name : item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieGallery;
