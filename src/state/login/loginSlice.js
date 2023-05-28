import {createSlice} from '@reduxjs/toolkit';
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
      state.user = action.payload;
    },
    resetAuth: state => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const {userAuthentication, resetAuth} = loginCheckSlice.actions;

export default loginCheckSlice.reducer;
