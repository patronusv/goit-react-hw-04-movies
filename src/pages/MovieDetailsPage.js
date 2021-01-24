import React, { useEffect, useState } from 'react';
import ApiServicesClass from '../api/api';
import { NavLink, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Cast from '../components/cast/Cast';
import Reviews from '../components/reviews/Reviews';

const MovieDetailsPage = () => {
  const [state, setState] = useState({});
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
      state: { from: location.pathname, query: 'batman' },
      hello: 'from about',
      page: history.location.state.page,
    });
  };
  return (
    <div>
      <h2>{state.title ? state.title : state.name}</h2>
      <button type="button" onClick={onGoBack}>
        Shit! go back!
      </button>
      <NavLink
        to={{
          pathname: `/movies/${state.id}/cast`,
          state: { ...location.state },
        }}
        exact
      >
        Cast
      </NavLink>
      <NavLink
        to={{
          pathname: `/movies/${state.id}/reviews`,
          state: { ...location.state },
        }}
        exact
      >
        Reviews
      </NavLink>
      <div>
        <Switch>
          <Route path={`/movies/${state.id}/cast`} exact component={Cast}></Route>
          <Route path={`/movies/${state.id}/reviews`} exact component={Reviews}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
