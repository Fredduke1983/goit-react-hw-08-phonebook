import { configureStore } from '@reduxjs/toolkit';

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
import { usersSlice } from './Slices/UsersSlice';
import { contactsSlice } from './Slices/ContactsSlice';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['users'],
};

const persistedReducer = persistReducer(persistConfig, usersSlice.reducer);

const store = configureStore({
  reducer: {
    users: persistedReducer,
    contacts: contactsSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);

export { store, persistor };
