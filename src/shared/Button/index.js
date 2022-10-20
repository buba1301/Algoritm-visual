import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../slices';

import s from './Button.module';

const selectAction = () => ({
  createArray: () => {},
  bubbleSort: (valueList) => actions.bubbleSort(valueList),
  selectionSort: (valueList) => actions.selectionSort(valueList),
  fastSort: (valueList) => actions.fastSort(valueList),
});

const Button = ({ name }) => {
  const valueList = useSelector((state) => state.valueList);

  const dispatch = useDispatch();

  const handleClick = ({ target }) => {
    const action = selectAction()[name];
    dispatch(action(valueList));
  };

  return (
    <button
      type='button'
      name={name}
      className={s.button}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;
