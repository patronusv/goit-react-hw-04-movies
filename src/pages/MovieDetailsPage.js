import React from 'react';
import { useHistory } from 'react-router-dom';
const MovieDetailsPage = () => {
  const history = useHistory();
  const onGoBack = () => {
    console.log(history);
    history.push(history.location.state.from);
  };
  return (
    <div>
      <h2>movie details</h2>
      <button type="button" onClick={onGoBack}>
        Shit! go back!
      </button>
    </div>
  );
};

export default MovieDetailsPage;
