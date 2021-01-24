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
            {item.name ? item.name : item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieGallery;
