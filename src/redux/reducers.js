import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchGetCurrentUser,
  fetchLoginUser,
  fetchLogoutUser,
} from './fetches';

export const loginUserThunk = createAsyncThunk(
  'users/logintUser',
  async user => {
    const data = await fetchLoginUser(user);
    return data;
  }
);

export const getCurrentUserThunk = createAsyncThunk(
  'users/getUser',
  async (_, thunk) => {
    const data = await fetchGetCurrentUser(thunk.getState().token);
    return data;
  }
);

export const getLogoutThunk = createAsyncThunk('users/logout', async () => {
  const data = await fetchLogoutUser();
  return data;
});
