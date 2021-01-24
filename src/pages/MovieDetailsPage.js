import React, { Suspense, useEffect, useState } from 'react';
import { NavLink, Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import ApiServicesClass from '../api/api';
import movieDetailsRoutes from '../routes/movieDetailsRoutes';
import MovieDetailsWrapper from './MovieDetailsPageStyled';

const MovieDetailsPage = () => {
  const [state, setState] = useState({});
  const match = useRouteMatch();

  const history = useHistory();
  const location = useLocation();
  const api = new ApiServicesClass();
  const getMovieDetails = async id => {
    const result = await api.fetchMovieById(id);

    setState({ ...result });
  };
  useEffect(() => {
    getMovieDetails(history.location.state.movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onGoBack = () => {
    history.push({
      pathname: history.location.state.from,
      search: '',
      hash: '',
      state: { from: location.pathname, query: location.state.query, page: location.state.page },
      page: history.location.state.page,
    });
  };
  const { name, title, release_date, poster_path, vote_average, overview, genres } = state;
  return (
    <MovieDetailsWrapper>
      <button className="Button" type="button" onClick={onGoBack}>
        Go back
      </button>
      <div className="movieDetailsContent">
        <img
          className="movieDetailsImg"
          src={
            poster_path
              ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`
              : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
          }
          alt={title ? title : name}
          width="600"
          height="900"
        ></img>
        <div className="movieDetailsDescription">
          <h2>
            {title ? title : name}({release_date && release_date.slice(0, 4)})
          </h2>
          <p>User score: {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul className="list movieDetailsGenresList">
            {genres &&
              genres.map(item => (
                <li className="movieDetailsGenresListItem" key={item.id}>
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="linkWrapper">
        <NavLink
          to={{
            pathname: `${match.url}/cast`,
            state: { ...location.state },
          }}
          exact
          className="movieDetailsLink"
          activeClassName="movieDetailsLinkActive"
        >
          Cast
        </NavLink>
        <NavLink
          to={{
            pathname: `${match.url}/reviews`,
            state: { ...location.state },
          }}
          exact
          className="movieDetailsLink"
          activeClassName="movieDetailsLinkActive"
        >
          Reviews
        </NavLink>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {movieDetailsRoutes.map(({ path, exact, component: MyComponent }) => (
              <Route path={`${match.url}${path}`} exact={exact} key={path} render={() => <MyComponent />} />
            ))}
          </Switch>
        </Suspense>
      </div>
    </MovieDetailsWrapper>
  );
};

export default MovieDetailsPage;
