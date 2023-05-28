import {createSlice} from '@reduxjs/toolkit';
import {getProducts} from './productsThunk';

const initialState = {
  products: null,
  error: null,
  isLoading: false,
};

const productsSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    resetAuth: state => {
      state.products = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(getProducts.pending, state => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getProducts.fulfilled, (state, {payload}) => {
      state.products = payload.products;
      state.isLoading = false;
    });

    builder.addCase(getProducts.rejected, (state, {payload}) => {
      if (payload != null) {
        state.error = payload.message;
      }
      state.isLoading = false;
    });
  },
});

export const {userAuthentication} = productsSlice.actions;

export default productsSlice.reducer;
