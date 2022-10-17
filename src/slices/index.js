import { combineReducers } from 'redux';

import { reducer as valueList, actions as ArrayActions } from './Array';
import {
  reducer as bubbleSort,
  actions as bubbleSortActions,
} from './bubbleSort';

export default combineReducers({
  valueList,
  bubbleSort,
});

const actions = {
  ...ArrayActions,
  ...bubbleSortActions,
};

export { actions };
