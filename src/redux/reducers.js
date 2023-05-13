import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContacts,
  deleteContacts,
  fetchGetCurrentUser,
  fetchLoginUser,
  fetchLogoutUser,
  getContacts,
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
    const data = await fetchGetCurrentUser(thunk.getState().users.token);
    return data;
  }
);

export const getLogoutThunk = createAsyncThunk('users/logout', async () => {
  const data = await fetchLogoutUser();
  return data;
});

export const getContactsThunk = createAsyncThunk(
  'phonebook/getContacts',
  async (_, thunk) => {
    return await getContacts(thunk.getState().users.token);
  }
);

export const createContactsThunk = createAsyncThunk(
  'phonebook/createContacts',
  async (contact, thunk) => {
    console.log('data thunk create contact', thunk.getState().users.token);

    const data = await createContacts(contact, thunk.getState().users.token);
    console.log('data thunk create', data);
    return data;
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'phonebook/deleteContacts',
  async id => {
    return await deleteContacts(id);
  }
);
