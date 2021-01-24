import React, { Suspense, useEffect, useState } from 'react';
import ApiServicesClass from '../api/api';
import { NavLink, Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
// import Cast from '../components/cast/Cast';
// import Reviews from '../components/reviews/Reviews';
import movieDetailsRoutes from '../routes/movieDetailsRoutes';

const MovieDetailsPage = () => {
  const [state, setState] = useState({});
  const match = useRouteMatch();
  console.log('match', match);
  const history = useHistory();
  const location = useLocation();
  const api = new ApiServicesClass();
  const getMovieDetails = async id => {
    const result = await api.fetchMovieById(id);
    console.log(result);
    setState({ ...result });
  };
  useEffect(() => {
    getMovieDetails(history.location.state.movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onGoBack = () => {
    console.log(history);
    history.push({
      pathname: history.location.state.from,
      search: '',
      hash: '',
      state: { from: location.pathname, query: location.state.query },
      page: history.location.state.page,
    });
  };
  const { name, title, release_date, poster_path, id, vote_average, overview, genres } = state;
  return (
    <div>
      <button type="button" onClick={onGoBack}>
        Shit! go back!
      </button>
      <div style={{ display: 'flex' }}>
        <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`} alt={title ? title : name}></img>
        <div>
          <h2>
            {title ? title : name}({release_date && release_date.slice(0, 4)})
          </h2>
          <p>User score: {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>{genres && genres.map(item => <li key={item.id}>{item.name}</li>)}</ul>
        </div>
      </div>
      <NavLink
        to={{
          pathname: `${match.url}/cast`,
          state: { ...location.state },
        }}
        exact
      >
        Cast
      </NavLink>
      <NavLink
        to={{
          pathname: `${match.url}/reviews`,
          state: { ...location.state },
        }}
        exact
      >
        Reviews
      </NavLink>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {movieDetailsRoutes.map(({ path, exact, component: MyComponent }) => (
              <Route path={`${match.url}${path}`} exact={exact} key={path} render={() => <MyComponent />} />
            ))}
          </Switch>
        </Suspense>
        {/* <Switch>
          <Route path={`/movies/${state.id}/cast`} exact component={Cast}></Route>
          <Route path={`/movies/${state.id}/reviews`} exact component={Reviews}></Route>
        </Switch> */}
      </div>
    </div>
  );
};

export default MovieDetailsPage;
