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
      <ul>
        {trending.map(item => (
          <li key={item.id}>
            <NavLink
              to={{
                pathname: '/movies/details',
                state: { from: location.pathname },
              }}
            >
              {item.name ? item.name : item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
