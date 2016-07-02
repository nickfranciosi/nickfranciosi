import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

const WorkItem = ({title, description, img}) => {
  return (
    <Link to={'/portfolio/' + title} className={styles.workItem}  style={{backgroundImage: 'url(' + img + ')'}}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </Link>
  );
};

WorkItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default WorkItem;
