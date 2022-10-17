import { combineReducers } from 'redux';

import { reducer as valueList, actions as ArrayActions } from './Array';

export default combineReducers({
  valueList,
});

const actions = {
  ...ArrayActions,
};

export { actions };
