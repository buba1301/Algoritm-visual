import {
  configureStore,
  getDefaultMiddleware,
  createListenerMiddleware,
} from '@reduxjs/toolkit';

import listenerMiddleware from '../features/listner';

import { reducer } from '../slices';

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: true,
    thunk: true,
  }).prepend(listenerMiddleware.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store
