import {
  getCurrentUserThunk,
  getLogoutThunk,
  loginUserThunk,
} from 'redux/reducers';
import { initialStateUsers } from './Initial';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialStateUsers,

  reducers: {
    addNewUser: (state, { payload }) => {
      return {
        ...state,
        token: payload.token,
        isLoggedin: true,
        user: { name: payload.user.name, email: payload.user.email },
      };
    },
  },

  extraReducers: builder => {
    builder
      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.isLoggedin = true;
        state.isLoading = false;
      })
      .addCase(getCurrentUserThunk.fulfilled, (state, { payload }) => {
        state.profile = payload;
        state.isLoading = false;
      })
      .addCase(getLogoutThunk.fulfilled, state => {
        state.profile = null;
        state.isLoggedin = false;
        state.token = '';
        state.user.name = '';
        state.user.email = '';
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          loginUserThunk.pending,
          getCurrentUserThunk.pending,
          getLogoutThunk.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          loginUserThunk.rejected,
          getCurrentUserThunk.rejected,
          getLogoutThunk.rejected
        ),
        state => {
          state.isLoading = false;
        }
      );
  },
});
export const { addNewUser } = usersSlice.actions;
