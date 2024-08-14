import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuth } from 'redux-toolkit/slices/authSlice';

const RequiresUnAuth = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useSelector(getAuth);

  const location = useLocation();
  if (isAuthenticated && location.pathname.includes('/login')) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default RequiresUnAuth;
