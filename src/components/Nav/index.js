import React from 'react';
import NavLink from './NavLink';
import styles from './styles.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink isIndex to="/" text="Home" />
      <NavLink to="/portfolio" text="Portfolio" />
      <NavLink to="/resume" text="Resume" />
      <NavLink to="/contact" text="Contact" />
    </nav>
  );
};

export default Nav;
