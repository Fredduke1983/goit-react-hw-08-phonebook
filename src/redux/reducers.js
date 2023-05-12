import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchLoginUser } from './fetches';

export const logintUserThunk = createAsyncThunk('users/getUser', async user => {
  const data = await fetchLoginUser(user);
  return data;
});
