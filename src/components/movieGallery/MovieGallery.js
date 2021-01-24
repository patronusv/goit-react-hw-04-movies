import React from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import MovieGalleryWrapper from './MovieGalleryStyled';
const MovieGallery = ({ movies, page, query }) => {
  const location = useLocation();
  const match = useRouteMatch();
  return (
    <MovieGalleryWrapper>
      <ul className="movieGallery">
        {movies.map(item => (
          <li className="movieGalleryItem" key={item.id}>
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
              className="movieGalleryLink"
            >
              <img
                className="movieGalleryImg"
                src={
                  item.poster_path
                    ? `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`
                    : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
                }
                alt={item.name ? item.name : item.title}
                width="220"
                height="330"
              ></img>
              <h3>{item.name ? item.name : item.title}</h3>
            </Link>
            <p className="movieGalleryText">{item.release_date}</p>
          </li>
        ))}
      </ul>
    </MovieGalleryWrapper>
  );
};

export default MovieGallery;
