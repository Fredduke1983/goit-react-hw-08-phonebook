import { createSlice, configureStore } from '@reduxjs/toolkit';
import { logintUserThunk } from './reducers';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: 'root',
  storage,
  //   whitelist: ['users'],
};

const persistedReducer = persistReducer(persistConfig, usersSlice.reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);
export { store, persistor };

// const store = configureStore({
//   reducer: usersSlice.reducer,
// });
export const { addNewUser } = usersSlice.actions;
