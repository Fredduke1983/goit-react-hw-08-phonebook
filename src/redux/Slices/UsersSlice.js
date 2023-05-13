import {
  getCurrentUserThunk,
  getLogoutThunk,
  loginUserThunk,
} from 'redux/reducers';
import { initialStateUsers } from './Initial';
import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialStateUsers,

  extraReducers: builder => {
    builder
      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.isLoggedin = true;
      })
      .addCase(getCurrentUserThunk.fulfilled, (state, { payload }) => {
        state.profile = payload;
      })
      .addCase(getLogoutThunk.fulfilled, state => {
        state.profile = null;
        state.isLoggedin = false;
        state.token = '';
        state.user.name = '';
        state.user.email = '';
      });
  },
});
