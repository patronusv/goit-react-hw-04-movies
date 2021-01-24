import React from 'react';
const Pagination = ({ onClick, title }) => {
  return (
    <button type="button" onClick={onClick}>
      {title}
    </button>
  );
};

export default Pagination;
