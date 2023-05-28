import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('getProducts', async () => {
  try {
    const response = await axios
      .get('https://dummyjson.com/products')
      .then(res => res);

    return response.data;
  } catch (error) {
    console.log(error);
  }
});
