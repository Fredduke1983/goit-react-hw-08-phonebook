import { createAsyncThunk } from '@reduxjs/toolkit';
import { createContacts, deleteContacts, getContacts } from 'fetch/fetches';

export const getContactsThunk = createAsyncThunk(
  'phonebook/getContacts',
  async () => {
    return await getContacts();
  }
);

export const createContactsThunk = createAsyncThunk(
  'phonebook/createContacts',
  async contact => {
    return await createContacts(contact);
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'phonebook/deleteContacts',
  async id => {
    return await deleteContacts(id);
  }
);
