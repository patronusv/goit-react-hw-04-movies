import { lazy } from 'react';

const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() => import('../pages/HomePage' /* webpackChunkName: "HomePage"*/)),
  },
  {
    path: '/movies/:movieId',
    name: 'Movies',
    exact: false,
    component: lazy(() => import('../pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage"*/)),
  },
  {
    path: '/movies',
    name: 'Movies details',
    exact: false,
    component: lazy(() => import('../pages/MoviesPage' /* webpackChunkName: "MoviesPage"*/)),
  },
];

export default mainRoutes;
