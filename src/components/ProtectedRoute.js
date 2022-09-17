import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
const ProtectedRoute = ({ children }) => {
  const { userNickname, setUserData } = useContext(AppContext);
  const userFromLocalStorage = window.localStorage.getItem('userNickname');

  useEffect(() => {
    if (userFromLocalStorage && !userNickname) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.github.com/users/${userFromLocalStorage}`
          );

          if (response.ok) {
            const userData = await response.json();

            setUserData(userData);
            // window.localStorage.setItem('userNickname', userData.login);
          } else {
            throw new Error('User Not Found');
          }
        } catch (error) {
          console.error(error.message);
        }
      };

      fetchData();
    }
  }, []);

  if (userNickname) {
    return children;
  }

  if (!userFromLocalStorage && !userNickname) {
    return <Navigate to='/login' />;
  }

  return null;
};

export default ProtectedRoute;
