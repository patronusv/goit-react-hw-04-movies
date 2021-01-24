import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderStyled from './HeaderStyled';
const Header = () => {
  return (
    <HeaderStyled>
      <NavLink
        to={{
          pathname: '/',
        }}
        exact
        className="navlink"
        activeClassName="navlink-active"
      >
        Home
      </NavLink>
      <NavLink
        to={{
          pathname: '/movies',
        }}
        className="navlink"
        activeClassName="navlink-active"
      >
        Movies
      </NavLink>
    </HeaderStyled>
  );
};

export default Header;
