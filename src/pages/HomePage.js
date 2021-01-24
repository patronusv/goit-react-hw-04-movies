import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ApiServicesClass from '../api/api';
const HomePage = () => {
  const [trending, setTrending] = useState([]);
  const api = new ApiServicesClass();
  const getTrendingMovies = async () => {
    const result = await api.fetchTrending();
    setTrending([...result]);
  };
  useEffect(() => {
    getTrendingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const location = useLocation();
  return (
    <div>
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {trending.map(item => (
          <li key={item.id}>
            <NavLink
              to={{
                pathname: `/movies/${item.id}`,
                state: {
                  from: location.pathname,
                  movieId: item.id,
                },
              }}
            >
              <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`} alt={item.name ? item.name : item.title}></img>
              <h3>{item.name ? item.name : item.title}</h3>
            </NavLink>
            <p>{item.release_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
