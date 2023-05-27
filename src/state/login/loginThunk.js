import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getLogin = createAsyncThunk('getLogin', async data => {
  try {
    const response = await axios
      .post('https://dummyjson.com/auth/login', data)
      .then(res => res);

    return response.data;
  } catch (error) {
    console.log(error);
  }
});
