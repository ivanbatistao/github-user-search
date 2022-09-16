import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
const ProtectedRoute = ({ children }) => {
  const { userNickname } = useContext(AppContext);

  if (userNickname) {
    return children;
  }

  return <Navigate to='/login' />;
};

export default ProtectedRoute;
