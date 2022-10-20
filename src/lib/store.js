import {
  configureStore,
  getDefaultMiddleware,
  createListenerMiddleware,
} from '@reduxjs/toolkit';

import { actions, reducer } from '../slices';

import { bubbleSort, selectedSort, fastSort } from '../features';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: actions.bubbleSort,
  effect: bubbleSort,
});

listenerMiddleware.startListening({
  actionCreator: actions.selectionSort,
  effect: selectedSort,
});

listenerMiddleware.startListening({
  actionCreator: actions.fastSort,
  effect: fastSort,
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: true,
    thunk: true,
  }).prepend(listenerMiddleware.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
