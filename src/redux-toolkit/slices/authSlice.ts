import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStateType } from '../store';

export type AuthSliceType = {
    
    isAuthenticated?: boolean;
    activeRole?: string;
    token?:string;
    isSuperAdmin:boolean
    isAuthInitialized?: boolean;
  };

  const initialState: AuthSliceType = {
   
    isAuthenticated: false,
    token:undefined,
    isSuperAdmin:false,
    isAuthInitialized: false
    
  };

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setAuthInitialized(state: AuthSliceType) {
        state.isAuthInitialized = true;
      },
      setAuthenticated(state: AuthSliceType, action: PayloadAction<AuthSliceType>) {
        state.isAuthenticated = action.payload.isAuthenticated;
      },
    
      setAccessToken(state: AuthSliceType, action: PayloadAction<AuthSliceType>) {
        const { token } = action.payload;
  
        if (token) {
          localStorage.setItem("access_token", token);
          state.token = action.payload.token;
          state.isSuperAdmin = action.payload.isSuperAdmin;
          state.isAuthenticated = true;
        }
      },

      setCredentials(state: AuthSliceType, action: PayloadAction<AuthSliceType>) {
        const { token } = action.payload;
        if (token) {
          localStorage.setItem("access_token",token)
          state.isAuthenticated = true;
          state.token=token
          state.isSuperAdmin=true
        } else {
          localStorage.removeItem("access_token")
          state.isAuthenticated = false;
          state.token=undefined
          state.isSuperAdmin=false
        }
      },
     
      setLogoutData(state: AuthSliceType) {
       
        state.isAuthenticated = false;
        state.token=undefined
        state.isSuperAdmin=false
      },
    },
  });

  export const { reducer } = slice;

  export const {
    setAccessToken,
    setCredentials,
    setLogoutData,
    setAuthenticated,
  
    setAuthInitialized
    
  } = slice.actions;

  export const getAuth = (state: RootStateType) => state.auth;

export const getIsAuthenticated = (state: RootStateType) =>
  state.auth.isAuthenticated;


export default slice;