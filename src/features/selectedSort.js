import { actions } from '../slices';

import { setArray } from './helpers';

const selectedSort = async (action, listenerApi) => {
  const res = [...action.payload];
  const length = res.length - 1;

  for (let i = 0; i < length; i += 1) {
    let minIndex = i;

    for (let j = i; j <= length; j += 1) {
      const currnetElement = res[j];
      const minElement = res[minIndex];

      listenerApi.dispatch(actions.setActiveElement([minIndex, j]));

      await listenerApi.delay(500);

      if (currnetElement < minElement) {
        minIndex = j;
      }
    }

    await listenerApi.delay(2000);

    if (minIndex !== i) {
      const right = res[i];
      const left = res[minIndex];

      listenerApi.dispatch(actions.setActiveElement([i, minIndex]));

      await listenerApi.delay(500);

      const params = {
        [minIndex]: right,
        [i]: left,
      };

      res[i] = left;
      res[minIndex] = right;

      setArray(params, listenerApi, actions);

      listenerApi.dispatch(actions.setSortedElement(i));

      await listenerApi.delay(500);
    }
  }
};

export default selectedSort;
