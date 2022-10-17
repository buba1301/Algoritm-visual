import { createSlice } from '@reduxjs/toolkit';
import log from 'eslint-plugin-react/lib/util/log';

const initialState = {
  activeElement: [],
};

const UISlice = createSlice({
  name: 'UIState',
  initialState,
  reducers: {
    setActiveElement: (state, action) => {
      const value = action.payload;
      state.activeElement = value;
    },
  },
});

export const { actions, reducer } = UISlice;
