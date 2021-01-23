import React, { useEffect, useState } from 'react';
import ApiServicesClass from '../api/api';
import { useHistory, useLocation } from 'react-router-dom';

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
  }, []);
  const onGoBack = () => {
    console.log(history);
    history.push({
      pathname: history.location.state.from,
      search: '?q=batman',
      hash: '#shit',
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
    </div>
  );
};

export default MovieDetailsPage;
