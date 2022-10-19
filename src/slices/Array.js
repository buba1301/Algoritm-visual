/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { createSlice } from '@reduxjs/toolkit';
import createArray from '../utils';

const arraySlice = createSlice({
  name: 'array',
  initialState: [],
  reducers: {
    createArray: (state, action) => (state = createArray(action.payload)),
    setArray: (state, action) => (state = action.payload),
    bubbleSort: (state, action) => {},
    selectionSort: (state, action) => {},
  },
});

export const { actions, reducer } = arraySlice;
