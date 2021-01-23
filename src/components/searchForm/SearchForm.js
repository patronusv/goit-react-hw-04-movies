import React, { useState } from 'react';
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
    <form onSubmit={onFormSubmit}>
      <input type="text" autoComplete="off" autoFocus placeholder="Search movies" onChange={onHandleInput} value={query} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
