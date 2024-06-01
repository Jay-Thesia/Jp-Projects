import { log } from 'console';
import { useGetLoggedInUserAPI } from 'pages/auth/services/auth.service';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  getAuth,
  setAuthInitialized,
  setCredentials,
  setLogoutData,
} from 'redux-toolkit/slices/authSlice';

const useAuthGuard = () => {
  // ===================== Hooks =======================
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, token, isAuthInitialized } = useSelector(getAuth);

  // ================= Custom hooks ====================
  const { getLoggedInUserAPI, isLoading } = useGetLoggedInUserAPI();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const loadUser = async () => {
    console.log('ehrerr');
    if (isAuthenticated && location.pathname === '/login') {
      navigate('/dashboard');
    }

    if (!isAuthenticated && location.pathname === '/dashboard') {
      navigate('/');
    }

    if (!token && !isAuthenticated) {
      const accessToken = localStorage.getItem('access_token');

      if (accessToken) {
        const { data, error } = await getLoggedInUserAPI({});

        if (!error && data) {
          dispatch(
            setCredentials({
              token: data.token,
              isSuperAdmin: data.isSuperAdmin,
            })
          );
        } else {
          dispatch(setLogoutData());
        }
      }
      dispatch(setAuthInitialized());
    }
  };

  console.log('isAuthenticated :>> ', isAuthenticated);
  console.log(isLoading);
  return {
    isLoading,
    isAuthInitialized,
  };
};

export default useAuthGuard;
