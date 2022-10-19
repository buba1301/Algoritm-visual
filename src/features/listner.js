/* eslint-disable guard-for-in */

import { actions } from '../slices';

import { listenerMiddleware } from '../lib/store';

const setArray = (params, listenerApi) => {
  const { valueList } = listenerApi.getState();

  const res = [...valueList];

  for (const index in params) {
    res[index] = params[index];
  }

  listenerApi.dispatch(actions.setArray(res));
};

const bubbleSort = async (action, listenerApi) => {
  const sortedElements = [];

  const res = [...action.payload];
  const length = res.length - 1;

  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < length - i; j += 1) {
      const left = res[j];
      const right = res[j + 1];

      listenerApi.dispatch(actions.setActiveElement([j, j + 1]));

      await listenerApi.delay(300);

      if (left > right) {
        res.splice(j, 1, right);
        res.splice(j + 1, 1, left);

        const params = {
          [j]: right,
          [j + 1]: left,
        };

        setArray(params, listenerApi);

        await listenerApi.delay(300);
      }
    }

    const sortedElementIndex = res.length - 1 - i;

    listenerApi.dispatch(actions.setSortedElement(sortedElementIndex));
  }
};

/* listenerMiddleware.startListening({
  actionCreator: actions.bubbleSort,
  effect: async (action, listenerApi) => {
    const sortedElements = [];

    const res = [...action.payload];
    const length = res.length - 1;

    for (let i = 0; i < length; i += 1) {
      for (let j = 0; j < length - i; j += 1) {
        const left = res[j];
        const right = res[j + 1];

        listenerApi.dispatch(actions.setActiveElement([j, j + 1]));

        await listenerApi.delay(300);

        if (left > right) {
          res.splice(j, 1, right);
          res.splice(j + 1, 1, left);

          const params = {
            [j]: right,
            [j + 1]: left,
          };

          setArray(params, listenerApi);

          await listenerApi.delay(300);
        }
      }

      const sortedElementIndex = res.length - 1 - i;

      listenerApi.dispatch(actions.setSortedElement(sortedElementIndex));
    }
  },
}); */

export default bubbleSort;
