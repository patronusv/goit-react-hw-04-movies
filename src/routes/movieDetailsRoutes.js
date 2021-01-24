import { lazy } from 'react';

const movieDetailsRoutes = [
  {
    path: '/cast',
    name: 'Movie cast',
    exact: true,
    component: lazy(() => import('../components/cast/Cast' /* webpackChunkName: "MovieCast"*/)),
  },
  {
    path: '/reviews',
    name: 'Movie reviews',
    exact: true,
    component: lazy(() => import('../components/reviews/Reviews' /* webpackChunkName: "MoviesReviews"*/)),
  },
];

export default movieDetailsRoutes;
