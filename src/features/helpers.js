export const setArray = (params, listenerApi, actions) => {
  const { valueList } = listenerApi.getState();

  const res = [...valueList];

  for (const index in params) {
    res[index] = params[index];
  }

  listenerApi.dispatch(actions.setArray(res));
};
