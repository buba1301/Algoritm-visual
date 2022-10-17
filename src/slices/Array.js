import { createSlice } from '@reduxjs/toolkit';
import createArray from '../utils';

const arraySlice = createSlice({
  name: 'array',
  initialState: [],
  reducers: {
    createArray(state, action) {
      return [...state, ...createArray(30, 600)];
    },
  },
});

export const { actions, reducer } = arraySlice;
