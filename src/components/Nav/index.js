import React from 'react';
import NavLink from './NavLink';

const Nav = () => {
  return (
    <nav>
      <NavLink isIndex to="/" text="Home" />
      <NavLink to="/portfolio" text="Portfolio" />
      <NavLink to="/contact" text="Contact" />
    </nav>
  );
};

export default Nav;
