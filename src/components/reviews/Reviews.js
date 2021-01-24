import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ApiServicesClass from '../../api/api';
import Pagination from '../pagination/Pagination';
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
  const pagination = async e => {
    const page = Number(e.target.textContent);
    const result = await api.fetchMovieReviewsById(location.state.movieId, page);
    setState(prevState => ({
      ...prevState,
      results: [...result.results],
    }));
  };
  const { results, total_pages } = state;
  return (
    <>
      {!results || (!results.length && <h2>We don't have any reviews yet</h2>)}
      {total_pages > 1 &&
        Array.from({ length: total_pages }, (v, k) => k + 1).map(item => <Pagination key={item} onClick={pagination} title={item} />)}
      <ul>
        {results &&
          results.map(item => (
            <li key={item.id}>
              <h3>{item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))}
      </ul>
      {total_pages > 1 &&
        Array.from({ length: total_pages }, (v, k) => k + 1).map(item => <Pagination key={item} onClick={pagination} title={item} />)}
    </>
  );
};

export default Reviews;
