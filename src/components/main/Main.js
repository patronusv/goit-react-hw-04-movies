import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import HomePage from '../../pages/HomePage';
// import MoviesPage from '../../pages/MoviesPage';
// import MovieDetailsPage from '../../pages/MovieDetailsPage';
import mainRoutes from '../../routes/mainRoutes';

const Main = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {mainRoutes.map(({ path, exact, component: MyComponent }) => (
          <Route path={path} exact={exact} key={path} render={() => <MyComponent />} />
        ))}
        {/* <Route path="/" exact component={HomePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} /> */}
      </Switch>
    </Suspense>
  );
};

export default Main;
