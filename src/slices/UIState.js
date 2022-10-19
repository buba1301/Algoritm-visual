/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeElement: [],
  sortedElement: [],
};

const UISlice = createSlice({
  name: 'UIState',
  initialState,
  reducers: {
    setActiveElement: (state, action) => {
      const value = action.payload;
      state.activeElement = value;
    },
    setSortedElement: (state, action) => {
      const value = action.payload;
      console.log('sliceSortesElement', value);
      state.sortedElement = [value, ...state.sortedElement];
    },
  },
});

export const { actions, reducer } = UISlice;
