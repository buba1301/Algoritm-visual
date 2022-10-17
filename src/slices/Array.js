/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { createSlice } from '@reduxjs/toolkit';
import createArray from '../utils';

const arraySlice = createSlice({
  name: 'array',
  initialState: [],
  reducers: {
    createArray: (state, action) => (state = createArray(action.payload)),
    bubbleSort: (state, action) => {
      const copyArr = state;
      const a = copyArr[1];
      const b = copyArr[0];
      copyArr[0] = a;
      copyArr[1] = b;
      state = copyArr;
    },
  },
});

export const { actions, reducer } = arraySlice;
