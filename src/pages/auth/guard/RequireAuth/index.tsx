import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuth } from 'redux-toolkit/slices/authSlice';

const RequiresAuth = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useSelector(getAuth);
  const location = useLocation();

  /* Not Logged In */
  if (!isAuthenticated && location.pathname.includes('/dashboard')) {
    return <Navigate to="/" />;
  } else if (isAuthenticated && location.pathname.includes('/login')) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default RequiresAuth;
