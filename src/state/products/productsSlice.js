import {createSlice} from '@reduxjs/toolkit';
import {getItemById, getProducts} from './productsThunk';

const initialState = {
  products: null,
  error: null,
  isLoading: false,
  selectedItem: null,
  cart: [],
  cartCount: 0,
};

const productsSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    resetAuth: state => {
      state.products = null;
    },
    addtoCart: (state, action) => {
      state.cartCount = state.cartCount + 1;
      state.cart = state.cart.push(action);
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

    builder.addCase(getItemById.pending, state => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getItemById.fulfilled, (state, {payload}) => {
      state.selectedItem = payload;
      state.isLoading = false;
    });

    builder.addCase(getItemById.rejected, (state, {payload}) => {
      if (payload != null) {
        state.error = payload.message;
      }
      state.isLoading = false;
    });
  },
});

export const {userAuthentication, addtoCart} = productsSlice.actions;

export default productsSlice.reducer;
