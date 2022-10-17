/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { createSlice } from '@reduxjs/toolkit';
import createArray from '../utils';

const arraySlice = createSlice({
  name: 'array',
  initialState: [],
  reducers: {
    createArray(state, action) {
      return (state = [...createArray(action.payload)]);
    },
  },
});

export const { actions, reducer } = arraySlice;
