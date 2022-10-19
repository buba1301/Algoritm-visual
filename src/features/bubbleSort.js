/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */

import { actions } from '../slices';

import { setArray, setDelay } from './helpers';

const bubbleSort = async (action, listenerApi) => {
  const res = [...action.payload];
  const length = res.length - 1;

  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < length - i; j += 1) {
      const left = res[j];
      const right = res[j + 1];

      const activeElements = [j, j + 1];

      listenerApi.dispatch(actions.setActiveElement(activeElements));

      await setDelay(listenerApi);

      if (left > right) {
        res.splice(j, 1, right);
        res.splice(j + 1, 1, left);

        const params = {
          [j]: right,
          [j + 1]: left,
        };

        setArray(params, listenerApi, actions);

        await setDelay(listenerApi);
      }
    }

    const sortedElementIndex = res.length - 1 - i;

    listenerApi.dispatch(actions.setSortedElement(sortedElementIndex));
  }
};

export default bubbleSort;
