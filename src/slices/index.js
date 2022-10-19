import { combineReducers } from 'redux';

import { reducer as valueList, actions as ArrayActions } from './Array';
import { reducer as UIState, actions as UIActions } from './UIState';

const reducer = combineReducers({
  valueList,
  UIState,
});

const actions = {
  ...ArrayActions,
  ...UIActions,
};

export { actions, reducer };
