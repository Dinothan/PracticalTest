import {createSlice} from '@reduxjs/toolkit';
import {getLogin} from './loginThunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: null,
  error: null,
  isLoading: false,
  isAuthenticated: false,
};

const getAuthentication = async () => {
  const AuthenticatedUser = await AsyncStorage.getItem('@security_Key');
  return AuthenticatedUser;
};

const loginCheckSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userAuthentication: (state, action) => {
      const auth = getAuthentication().then(res => {
        return res;
      });
      state.isAuthenticated =
        auth.toString().length > 0 !== null ? true : false;
      state.user = action;
    },
  },
  extraReducers: builder => {},
});

export const {userAuthentication} = loginCheckSlice.actions;

export default loginCheckSlice.reducer;
