import { actions } from '../slices';

const setArray = (params, listenerApi) => {
  const { valueList } = listenerApi.getState();

  const res = [...valueList];

  for (const index in params) {
    res[index] = params[index];
  }

  listenerApi.dispatch(actions.setArray(res));
};

const selectionSort = async (action, listenerApi) => {
  console.log('Here');
  const res = [...action.payload];
  const length = res.length - 1;

  for (let i = 0; i < length; i += 1) {
    let minIndex = i;

    for (let j = i; j < length; j += 1) {
      const currnetElement = res[j];
      const minElement = res[minIndex];

      if (currnetElement < minElement) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const right = res[i];
      const left = res[minIndex];

      listenerApi.dispatch(actions.setActiveElement([i, minIndex]));

      await listenerApi.delay(2000);

      const params = {
        [minIndex]: right,
        [i]: left,
      };

      res[i] = left;
      res[minIndex] = right;

      setArray(params, listenerApi);

      await listenerApi.delay(2000);
    }
  }
};

/* listenerMiddleware.startListening({
  actionCreator: actions.selectionSort,
  effect: async (action, listenerApi) => {
    console.log('Here');
    const res = [...action.payload];
    const length = res.length - 1;

    for (let i = 0; i < length; i += 1) {
      let minIndex = i;

      for (let j = i; j < length; j += 1) {
        const currnetElement = res[j];
        const minElement = res[minIndex];

        if (currnetElement < minElement) {
          minIndex = j;
        }

        listenerApi.dispatch(
          actions.setActiveElement(minElement, currnetElement)
        );

        await listenerApi.delay(2000);
      }

      if (minIndex !== i) {
        const right = res[i];
        const left = res[minIndex];

        const params = {
          [minIndex]: right,
          [i]: left,
        };

        res[i] = left;
        res[minIndex] = right;

        setArray(params, listenerApi);

        await listenerApi.delay(2000);
      }
    }

    // listenerApi.dispatch(actions.setSortedElement());
  },
}); */

export default selectionSort;
