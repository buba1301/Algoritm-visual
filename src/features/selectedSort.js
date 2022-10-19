/* eslint-disable no-await-in-loop */
import { actions } from '../slices';

import { setArray, setDelay } from './helpers';

const selectedSort = async (action, listenerApi) => {
  const res = [...action.payload];
  const length = res.length - 1;

  for (let i = 0; i < length; i += 1) {
    let minIndex = i;

    for (let j = i; j <= length; j += 1) {
      const currnetElement = res[j];
      const minElement = res[minIndex];

      const activeElements = [minIndex, j];

      listenerApi.dispatch(actions.setActiveElement(activeElements));

      await setDelay(listenerApi);

      if (currnetElement < minElement) {
        minIndex = j;
      }
    }

    await setDelay(listenerApi);

    if (minIndex !== i) {
      const right = res[i];
      const left = res[minIndex];

      listenerApi.dispatch(actions.setActiveElement([i, minIndex]));

      await setDelay(listenerApi);

      const params = {
        [minIndex]: right,
        [i]: left,
      };

      res[i] = left;
      res[minIndex] = right;

      await setArray(params, listenerApi, actions);

      await setDelay(listenerApi);
    }

    listenerApi.dispatch(actions.setSortedElement(i));
  }
  listenerApi.dispatch(actions.setSortedElement(length));
};

export default selectedSort;
