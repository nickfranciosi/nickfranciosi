import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const WorkItem = ({title, description, img}) => {
  return (
    <Link to={'/portfolio/' + title} className="workItem"  style={{backgroundImage: 'url(' + img + ')'}}>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
};

WorkItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default WorkItem;
