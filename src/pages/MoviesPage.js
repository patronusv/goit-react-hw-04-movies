import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ApiServicesClass from '../api/api';
import MovieGallery from '../components/movieGallery/MovieGallery';
import Pagination from '../components/pagination/Pagination';
import PaginationWrapper from '../components/pagination/PaginationWrapperStyled';
import SearchForm from '../components/searchForm/SearchForm';

const initialState = {
  movies: [],
  page: 1,
  query: '',
  error: null,
  maxpages: 1,
};
const MoviesPage = () => {
  const [state, setState] = useState({ ...initialState });
  const api = new ApiServicesClass();
  const history = useHistory();
  const location = useLocation();
  const getMovies = async (query, page = 1) => {
    try {
      if (query === '') {
        return;
      }
      const result = await api.fetchMovies(query, page);
      console.log(result);
      await setState(prevState => ({
        ...prevState,
        movies: [...result.results],
        page: 1,
        query: query,
        maxpages: result.total_pages,
      }));
      history.push({
        ...history,
        search: `?query=${query}`,
      });
    } catch (error) {
      setState(prevState => ({ ...prevState, error: error }));
    }
  };
  const pagination = async e => {
    const page = Number(e.target.textContent);
    console.log(page);
    await getMovies(state.query, page);
    setState(prevState => ({
      ...prevState,
      page: page,
    }));
  };
  useEffect(() => {
    // console.log(`searching for ${location.state.query} page ${location.page}`);
    console.log(location);
    if (!location.state) {
      return;
    } else {
      location.state.query &&
        getMovies(location.state.query, location.state.page).then(() => setState(prevState => ({ ...prevState, page: location.state.page })));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { movies, page, query } = state;
  return (
    <>
      <SearchForm getMovies={getMovies} />
      <PaginationWrapper>
        {movies.length > 0 &&
          Array.from({ length: state.maxpages }, (v, k) => k + 1).map(item => <Pagination key={item} onClick={pagination} title={item} />)}
      </PaginationWrapper>
      <MovieGallery movies={movies} page={page} query={query} />
      <PaginationWrapper>
        {movies.length > 0 &&
          Array.from({ length: state.maxpages }, (v, k) => k + 1).map(item => <Pagination key={item} onClick={pagination} title={item} />)}
      </PaginationWrapper>
    </>
  );
};

export default MoviesPage;
