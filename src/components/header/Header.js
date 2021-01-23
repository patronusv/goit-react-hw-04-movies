import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <NavLink
        to={{
          pathname: '/',
        }}
        exact
      >
        Home
      </NavLink>
      <NavLink
        to={{
          pathname: '/movies',
        }}
      >
        Movies
      </NavLink>
    </>
  );
};

export default Header;
