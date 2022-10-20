/* eslint-disable guard-for-in */
export const setArray = (params, listenerApi, actions) => {
  const { valueList } = listenerApi.getState();

  const res = [...valueList];

  for (const index in params) {
    res[index] = params[index];
  }

  listenerApi.dispatch(actions.setArray(res));
};

export const setDelay = async (listenerApi) => {
  await listenerApi.delay(0);
};
