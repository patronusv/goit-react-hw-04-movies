import React from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
const MovieGallery = ({ movies, page, query }) => {
  const location = useLocation();
  const match = useRouteMatch();
  return (
    <ul>
      {movies.map(item => (
        <li key={item.id}>
          <Link
            to={{
              pathname: `${match.url}/${item.id}`,
              state: {
                from: location.pathname,
                movieId: item.id,
                page: page,
                query: query,
              },
            }}
          >
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`} alt={item.name ? item.name : item.title}></img>
            <h3>{item.name ? item.name : item.title}</h3>
          </Link>
          <p>{item.release_date}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieGallery;
