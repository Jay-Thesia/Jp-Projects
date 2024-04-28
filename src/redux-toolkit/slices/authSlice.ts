import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "redux-toolkit/store";

export interface PortalInterface {
  portal: string;
}

export interface AuthInterface {
  portal?: PortalInterface | null;
  token?: string | null;
  isSuperAdmin?: boolean | null;
  isAuthenticated?: boolean;
  isAuthInitialized?: boolean;
}

const initialState: AuthInterface = {
  portal: null,
  token: null,
  isSuperAdmin: false,
  isAuthenticated: false,
  isAuthInitialized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogoutData(state: AuthInterface) {
      localStorage.removeItem("access_token");
      state.isSuperAdmin = false;
      state.token = null;
      state.portal = null;
      state.isAuthenticated = false;
    },

    setAccessToken(state: AuthInterface, action: PayloadAction<AuthInterface>) {
      const { token } = action.payload;

      if (token) {
        localStorage.setItem("access_token", token);
        state.token = action.payload.token;
        state.isSuperAdmin = action.payload.isSuperAdmin;
        state.isAuthenticated = true;
      }
    },
    setAuthInitialized(state: AuthInterface) {
      state.isAuthInitialized = true;
    },
    setCredentials(state: AuthInterface, action: PayloadAction<AuthInterface>) {
      const { token } = action.payload;

      if (token) {
        localStorage.setItem("access_token", token);
        state.token = action.payload.token;
        state.isSuperAdmin = action.payload.isSuperAdmin;
        state.portal = action.payload.portal;
        state.isAuthenticated = true;
      } else {
        localStorage.removeItem("access_token");
        state.token = null;
        state.portal = null;
        state.isSuperAdmin = false;
        state.isAuthenticated = false;
      }
    },
  },
});

export const { reducer } = authSlice;

export const getAuth = (state: RootState) => state.auth;
export const getCurrentPortal = (state: RootState) => state.auth.portal;

export const {
  setLogoutData,
  setAccessToken,
  setCredentials,
  setAuthInitialized,
} = authSlice.actions;

export default authSlice;
