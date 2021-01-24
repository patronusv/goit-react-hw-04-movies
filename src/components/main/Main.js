import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage';

const Main = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />
    </Switch>
  );
};

export default Main;
