import React, { useState } from 'react';
import ApiServicesClass from '../api/api';
import MovieGallery from '../components/movieGallery/MovieGallery';
import SearchForm from '../components/searchForm/SearchForm';

const initialState = {
  movies: [],
  page: 1,
  query: '',
  error: null,
};
const MoviesPage = () => {
  const [state, setState] = useState({ ...initialState });
  const api = new ApiServicesClass();
  const getMovies = async (query, page = 1) => {
    try {
      if (query === '') {
        return;
      }
      const result = await api.fetchMovies(query, page);
      console.log(result);
      setState(prevState => ({ ...prevState, movies: [...result], page: 2, query: query }));
    } catch (error) {
      setState(prevState => ({ ...prevState, error: error }));
    }
  };
  const { movies } = state;
  return (
    <>
      <h2>Movies page</h2>
      <SearchForm getMovies={getMovies} />
      <MovieGallery movies={movies} />
    </>
  );
};

export default MoviesPage;
