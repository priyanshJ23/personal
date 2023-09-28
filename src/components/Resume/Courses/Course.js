import React from 'react';
import PropTypes from 'prop-types';

const Course = ({ data, last }) => (
  <li className="course-container">
      <h5 className="course-name">{data.title}.</h5>
  </li>
);

Course.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

Course.defaultProps = {
  last: false,
};

export default Course;
