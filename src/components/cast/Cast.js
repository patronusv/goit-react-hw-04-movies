import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ApiServicesClass from '../../api/api';
const Cast = () => {
  const [state, setState] = useState({});
  const location = useLocation();
  const api = new ApiServicesClass();
  const getMovieCast = async id => {
    const result = await api.fetchMovieCastById(id);
    console.log(result);
    setState({ ...result, castToShow: result.cast.slice(0, 10) });
  };
  useEffect(() => {
    getMovieCast(location.state.movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const showAllCast = () => {
    console.log('before', state);

    setState(prevState => ({ ...prevState, castToShow: [...prevState.cast] }));
    console.log('after', state);
  };
  const { castToShow, cast } = state;

  return (
    <>
      <h2>{location.state.movieId}</h2>
      <ul>{castToShow && castToShow.map(item => <li key={item.cast_id}>{item.name}</li>)}</ul>
      {castToShow && cast.length !== castToShow.length && (
        <button type="button" onClick={showAllCast}>
          Show all
        </button>
      )}
    </>
  );
};

export default Cast;
