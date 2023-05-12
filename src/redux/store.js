import { createSlice, configureStore } from '@reduxjs/toolkit';
import { logintUserThunk } from './reducers';

const initialState = {
  user: {
    name: '',
    email: '',
    password: null,
  },

  token: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, newUser) => {
      console.log(newUser.payload);
    },
  },

  extraReducers: builder => {
    builder.addCase(logintUserThunk.fulfilled, (state, { payload }) => {
      console.log(payload.user);
      state.token = payload.token;
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
    });
  },
});

const store = configureStore({
  reducer: usersSlice.reducer,
});
export const { addNewUser } = usersSlice.actions;
export { store };
