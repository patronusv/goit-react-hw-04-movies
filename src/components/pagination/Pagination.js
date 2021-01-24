import React from 'react';

const Pagination = ({ onClick, title }) => {
  return (
    <button className="Button" type="button" onClick={onClick}>
      {title}
    </button>
  );
};

export default Pagination;
