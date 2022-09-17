import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Home = () => {
  const {
    userData: { name },
  } = useContext(AppContext);

  return (
    <main>
      <div>
        <p>Welcome</p>
        <p>{name}</p>
      </div>
    </main>
  );
};

export default Home;
