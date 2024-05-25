// ** Packages **
import { combineReducers } from '@reduxjs/toolkit';

// ** Redux Slices **
import { reducer as authReducer } from './slices/authSlice';
import { reducer as toastReducer } from './slices/toastSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  commonToast:toastReducer 
});

export default rootReducer;
