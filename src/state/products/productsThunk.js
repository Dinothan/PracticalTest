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

export const getItemById = createAsyncThunk('getItemById', async id => {
  try {
    const response = await axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(res => res);

    return response.data;
  } catch (error) {
    console.log(error);
  }
});
