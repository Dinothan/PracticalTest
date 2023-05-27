import {combineReducers, configureStore} from '@reduxjs/toolkit';
import LoginSlice from './login/loginSlice';

const rootReducer = combineReducers({
  auth: LoginSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
