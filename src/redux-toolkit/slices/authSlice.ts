import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStateType } from '../store';

export type AuthSliceType = {
    user?: any;
    isAuthenticated?: boolean;
    activeRole?: string;
  };

  const initialState: AuthSliceType = {
    user: null,
    isAuthenticated: false,
    activeRole: '',
  };

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setAuthenticated(state: AuthSliceType, action: PayloadAction<AuthSliceType>) {
        state.isAuthenticated = action.payload.isAuthenticated;
      },
      setUserData(state: AuthSliceType, action: PayloadAction<AuthSliceType>) {
        state.user = action.payload.user;
      },
      
      setCredentials(state: AuthSliceType, action: PayloadAction<AuthSliceType>) {
        const { user } = action.payload;
        if (user) {
          state.user = action.payload.user;
          state.isAuthenticated = true;
        } else {
          state.user = null;
          state.isAuthenticated = false;
        }
      },
     
      setLogoutData(state: AuthSliceType) {
        state.user = null;
        state.isAuthenticated = false;
      },
    },
  });

  export const { reducer } = slice;

  export const {
    setCredentials,
    setLogoutData,
    setAuthenticated,
    setUserData,
    
  } = slice.actions;

  export const getAuth = (state: RootStateType) => state.auth;

export const getIsAuthenticated = (state: RootStateType) =>
  state.auth.isAuthenticated;

export const getCurrentUser = (state: RootStateType) => state.auth.user;

export default slice;