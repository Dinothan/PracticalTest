import {combineReducers, configureStore} from '@reduxjs/toolkit';
import LoginSlice from './login/loginSlice';
import ProductsSlice from './products/productsSlice';

const rootReducer = combineReducers({
  auth: LoginSlice,
  home: ProductsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
