import { createSlice, configureStore } from '@reduxjs/toolkit';
import {
  getCurrentUserThunk,
  getLogoutThunk,
  loginUserThunk,
} from './reducers';
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
  isLoggedin: false,
  token: '',
  profile: null,
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
export const { addNewUser } = usersSlice.actions;
