import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ApiServicesClass from '../../api/api';
const Reviews = () => {
  const [state, setState] = useState({});
  const location = useLocation();
  const api = new ApiServicesClass();
  const getMovieReviews = async id => {
    const result = await api.fetchMovieReviewsById(id);
    console.log(result);
    setState({ ...result });
  };
  useEffect(() => {
    getMovieReviews(location.state.movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <h2>{location.state.movieId}</h2>;
};

export default Reviews;
