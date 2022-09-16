import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const userNickname = true;

  if (userNickname) {
    return children;
  }

  return <Navigate to='/login' />;
};

export default ProtectedRoute;
