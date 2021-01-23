import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';

const Main = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies" component={MoviesPage} />
    </Switch>
  );
};

export default Main;
