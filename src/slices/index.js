import { combineReducers } from 'redux';

import { reducer as ArrayReducer, actions as ArrayActions } from './Array';

export default combineReducers({
  ArrayReducer,
});

const actions = {
  ArrayActions,
};

export { actions };
