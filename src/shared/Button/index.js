import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../slices';

import s from './Button.module';

const selectAction = () => ({
  createArray: () => {},
  bubbleSort: (valueList) => actions.bubbleSort(valueList),
  selectionSort: (valueList) => actions.selectionSort(valueList),
});

const Button = ({ name }) => {
  const valueList = useSelector((state) => state.valueList);

  const dispatch = useDispatch();

  const handleClick = ({ target }) => {
    console.log('Target clicked: ', target);
    console.log('Target clicked func: ', selectAction()[name](valueList));
    dispatch(selectAction()[name](valueList));
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
