import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Login = () => {
  const { userNickname, setUserData } = useContext(AppContext);
  const userFromLocalStorage = window.localStorage.getItem('userNickname');

  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  if (userNickname || userFromLocalStorage) {
    return <Navigate to='/' />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${inputValue}`
        );

        if (response.ok) {
          const userData = await response.json();

          const repositoriesResponse = await fetch(userData.repos_url);

          if (repositoriesResponse.ok) {
            const repositories = await repositoriesResponse.json();
            userData.repositories = repositories;
          } else {
            throw new Error('User Not Found');
          }

          setUserData(userData);
          window.localStorage.setItem('userNickname', userData.login);
        } else {
          throw new Error('User Not Found');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={inputValue} onChange={handleChange} />
      <button type='submit'>Login</button>
      {error && <span>{error}</span>}
    </form>
  );
};

export default Login;
