import React, { useState } from 'react';
import SearchFormWrapper from './SearchFormStyled';
const SearchForm = ({ getMovies }) => {
  const [query, setQuery] = useState('');
  const onHandleInput = e => {
    setQuery(e.target.value);
  };
  const onFormSubmit = e => {
    e.preventDefault();
    getMovies(query);
  };
  return (
    <SearchFormWrapper>
      <form className="SearchForm" onSubmit={onFormSubmit}>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={onHandleInput}
          value={query}
        />
        <button className="SearchForm-button" type="submit">
          Search
        </button>
      </form>
    </SearchFormWrapper>
  );
};

export default SearchForm;
