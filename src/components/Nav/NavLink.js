import React, { PropTypes }  from 'react';
import { Link } from 'react-router';

const NavLink = ({to, text, isIndex}) => (
  <Link onlyActiveOnIndex={isIndex} activeClassName="active" to={to}>{text} {isIndex} </Link>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isIndex: PropTypes.boolean
};

export default NavLink;
