/* eslint-disable no-await-in-loop */
/* eslint-disable prefer-destructuring */
import { actions } from '../slices';

import { setArray, setDelay } from './helpers';

const patrition = async (list, left, right, middleValue, listenerApi) => {
  let i = left;
  let j = right;

  while (i <= j) {
    listenerApi.dispatch(actions.setActiveElement([i, j]));

    while (list[i] < middleValue) {
      await setDelay(listenerApi);

      listenerApi.dispatch(actions.setActiveElement([i, j]));
      i += 1;
    }

    while (list[j] > middleValue) {
      await setDelay(listenerApi);

      listenerApi.dispatch(actions.setActiveElement([i, j]));
      j -= 1;
    }

    if (i <= j) {
      listenerApi.dispatch(actions.setActiveElement([i, j]));

      await setDelay(listenerApi);

      const params = {
        [i]: list[j],
        [j]: list[i],
      };

      const temp = list[i];
      list[i] = list[j];
      list[j] = temp;

      await setDelay(listenerApi);

      setArray(params, listenerApi, actions);

      await setDelay(listenerApi);

      i += 1;
      j -= 1;
    }
  }

  return i;
};

const sort = async (list, listenerApi, leftIndex, rightIndex) => {
  const res = [...list];

  // const { valueList } = listenerApi.getState();

  // const list = valueList.slice(leftIndex, rightIndex);

  // const length = list.length;

  const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  const middleValue = list[middleIndex];

  listenerApi.dispatch(actions.setHelperElement(middleIndex));

  const index = await patrition(
    res,
    leftIndex,
    rightIndex,
    middleValue,
    listenerApi
  );

  listenerApi.dispatch(actions.setHelperElement(index));

  if (leftIndex < index - 1) {
    await sort(res, listenerApi, leftIndex, index - 1);
  }

  if (index < rightIndex) {
    await sort(res, listenerApi, index, rightIndex);
  }

  return res;
};

const fastSort = async (action, listenerApi) => {
  await sort(action.payload, listenerApi, 0, action.payload.length - 1);

  // console.log(res);

  // listenerApi.dispatch(actions.setArray(res));
};

export default fastSort;

/*


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
    ...(await sort(left, listenerApi)),
    middleValue,
    ...(await sort(right, listenerApi)),
  ];

  return res; */
