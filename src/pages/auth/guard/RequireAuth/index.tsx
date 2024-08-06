import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuth } from 'redux-toolkit/slices/authSlice';

const RequiresAuth = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useSelector(getAuth);
  console.log('isAuthenticated: ', isAuthenticated);
  const location = useLocation();

  /* Not Logged In */
  if (!isAuthenticated && location.pathname !== '/login') {
    return <Navigate to="/" />;
  } else if (isAuthenticated && location.pathname !== '/login') {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default RequiresAuth;
