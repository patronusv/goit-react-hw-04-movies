import React, { useEffect, useState } from 'react';
import ApiServicesClass from '../api/api';
const HomePage = () => {
  const [trending, setTrending] = useState([]);
  const api = new ApiServicesClass();
  const getTrendingMovies = async () => {
    const result = await api.getTrending();
    setTrending([...result]);
  };
  useEffect(() => {
    getTrendingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <ul>
        {trending.map(item => (
          <li key={item.id}>{item.name ? item.name : item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
