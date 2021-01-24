import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ApiServicesClass from '../../api/api';
import CastWrapper from './CastStyled';
const Cast = () => {
  const [state, setState] = useState({});
  const location = useLocation();
  const api = new ApiServicesClass();
  const getMovieCast = async id => {
    const result = await api.fetchMovieCastById(id);
    console.log(result);
    setState({ ...result, castToShow: result.cast.slice(0, 10) });
  };
  useEffect(() => {
    getMovieCast(location.state.movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const showAllCast = () => {
    console.log('before', state);

    setState(prevState => ({ ...prevState, castToShow: [...prevState.cast] }));
    console.log('after', state);
  };
  const { castToShow, cast } = state;

  return (
    <CastWrapper>
      <ul className="castList">
        {castToShow &&
          castToShow.map(item => (
            <li className="castListItem" key={item.cast_id}>
              <img
                className="castListImg"
                src={
                  item.profile_path
                    ? `https://www.themoviedb.org/t/p/w138_and_h175_face/${item.profile_path}`
                    : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
                }
                alt={`${item.name}`}
                width="138"
                height="175"
              />
              <h3 className="castListTitle">{item.name}</h3>
              <p className="castListText">Character: {item.character}</p>
            </li>
          ))}
      </ul>
      {castToShow && cast.length !== castToShow.length && (
        <button className="Button" type="button" onClick={showAllCast}>
          Show all
        </button>
      )}
    </CastWrapper>
  );
};

export default Cast;
