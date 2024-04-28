import { useGetLoggedInUserAPI } from "pages/auth/services/auth.service";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getAuth,
  setAuthInitialized,
  setCredentials,
  setLogoutData,
} from "redux-toolkit/slices/authSlice";

const useAuthGuard = () => {
  // ===================== Hooks =======================
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, token, isAuthInitialized, isSuperAdmin } =
    useSelector(getAuth);

  // ================= Custom hooks ====================
  const { getLoggedInUserAPI, isLoading } = useGetLoggedInUserAPI();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isSuperAdmin]);

  const loadUser = async () => {
    if (
      isAuthenticated &&
      isSuperAdmin &&
      (location.pathname === "/" || location.pathname === "/properties")
    ) {
      navigate("/dashboard");
    }

    if (isAuthenticated && !isSuperAdmin) {
      if (
        location.pathname === "/dashboard" ||
        location.pathname === "/portals" ||
        location.pathname.includes("/log")
      ) {
        navigate("/");
      }
    }

    if (!token && !isAuthenticated && !isAuthInitialized) {
      const accessToken = localStorage.getItem("access_token");

      if (accessToken) {
        const { data, error } = await getLoggedInUserAPI({});

        if (!error && data) {
          dispatch(
            setCredentials({
              token: data.token,
              portal: data.hubspotPortalId,
              isSuperAdmin: data.isSuperAdmin,
            })
          );
          dispatch(setAuthInitialized());
        } else {
          dispatch(setLogoutData());
          dispatch(setAuthInitialized());
        }
      } else {
        dispatch(setAuthInitialized());
      }
    }
  };

  return {
    isLoading,
    isAuthenticated,
    isAuthInitialized,
  };
};

export default useAuthGuard;
