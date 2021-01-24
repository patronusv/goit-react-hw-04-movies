import React from 'react';
import PropTypes from 'prop-types';
const Pagination = ({ onClick, title }) => {
  return (
    <button className="Button" type="button" onClick={onClick}>
      {title}
    </button>
  );
};

export default Pagination;
Pagination.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
