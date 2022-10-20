/* eslint-disable no-await-in-loop */
/* eslint-disable prefer-destructuring */
import { actions } from '../slices';

import { setArray, setDelay } from './helpers';

const sort = async (list, listenerApi, side = '') => {
  const { valueList } = listenerApi.getState();

  const length = list.length;

  if (length < 2) {
    return list;
  }

  const middleIndex = Math.floor(length / 2);
  const middleValue = list[middleIndex];

  listenerApi.dispatch(actions.setHelperElement(middleIndex));

  const left = [];
  const right = [];

  for (let i = 0; i < list.length; i += 1) {
    const currnetElement = list[i];

    listenerApi.dispatch(actions.setActiveElement([i]));

    if (currnetElement < middleValue) {
      left.push(currnetElement);
    }

    if (currnetElement > middleValue) {
      right.push(currnetElement);
    }

    await setDelay(listenerApi);
  }

  await setDelay(listenerApi);

  const res = [
    ...(await sort(left, listenerApi, 'left')),
    middleValue,
    ...(await sort(right, listenerApi, 'right')),
  ];

  return res;
};

const fastSort = async (action, listenerApi) => {
  const res = await sort(action.payload, listenerApi);

  listenerApi.dispatch(actions.setArray(res));
};

export default fastSort;
