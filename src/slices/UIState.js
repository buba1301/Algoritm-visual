/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeElement: [],
  sortedElement: [],
  helperElement: [],
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
      state.sortedElement = [value, ...state.sortedElement];
    },
    setHelperElement: (state, action) => {
      const value = action.payload;
      state.helperElement = [value, ...state.sortedElement];
    },
  },
});

export const { actions, reducer } = UISlice;
